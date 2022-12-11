const options = ["A","B","C","D","E"];            
const questiontype = {shortanswer : 1, multichoice : 2, multiselect : 3};
var problem = 0;
var answers = [];
var questions, hints, answerkey;
var hintnumber = 0;
var sessionLog = {"problems":[]};

const SessionLog = {
    type : "object",
    properties: {
        assessment : "string",
        assessmentscript : "string",
        answers: {
            type: "array",
            default: []
        },
        answerkey: {
            type: "array",
            default: []
        },
        correct: {
            type: "number",
            default: 0
        },
        incorrect: {
            type: "number",
            default: 0
        },
        problems: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    prompt: "string",
                    steps: "array",
                    default: []
                }
            }
        }
    }
}

const remoteStorage = new RemoteStorage({changeEvents: { local: true, window: true, remote: true, conflicts: true }});
remoteStorage.access.claim('mathlogs', 'rw');     
const client = remoteStorage.scope('/mathlogs/');

client.declareType("SessionLog", SessionLog);

// var sessionLog = SessionLog;

window.onload = (event) =>{  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    assessmentscript = urlParams.get("assessment");

    loadJS(assessmentscript, true, function(){
        console.log("Javascript loaded");
        sessionLog["assessmentscript"] = assessmentscript;
        sessionLog["assessment"] = assessment.title;
        questions = assessment.questions;
        hints = assessment.hints;
        answerkey = assessment.answers;
        loadDoc("problems.html", "problems", function(){
            loadDoc("hints.html", "hints", function(){
                loadDoc("scratchpad.html", "scratchpad", function(){
                    pad = document.getElementById("pad");
                    log = document.getElementById("log");
                    const preformat = document.getElementById("preformat");

                    pad.addEventListener("keyup", function(event){
                        if(preformat.checked) {
                            preview.innerHTML = "`" + pad.value + "`";
                        } else {
                            preview.innerHTML = pad.value;
                        }                    
                        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                    });

                    pad.addEventListener("change", function(e){
                        if(preformat.checked) {
                            var myanswer = "`" + pad.value + "`";
                        } else {
                            var myanswer = pad.value;
                        }
                        log.append(newRow(myanswer));
                        log.lastChild.scrollIntoView();
                        sessionLog.problems[problem].steps.push(myanswer);
                        preview.innerHTML = myanswer;
                        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);	
                    });      
                    
                    showQuestion(questions[problem]);                   
                
                    const widget = new Widget(remoteStorage);
                    widget.attach("scratchpad");              
                })            
            })
        });        
    })
}

function loadJS(FILE_URL, async = true, callback) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // success event 
  scriptEle.addEventListener("load", () => {
    callback();
  });
   // error event
  scriptEle.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev);
  });
}


function getQuestionType(question) {
    if(question.type=="shortanswer") {
        return questiontype.shortanswer
    } else if (question.type=="multiselect") {
        return questiontype.multiselect
    } else {
        return questiontype.multichoice
    }
}

function loadDoc(fname, tag, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById(tag).innerHTML = this.responseText;
    if(callback)
        callback();
    }
  xhttp.open("GET", fname, true);
  xhttp.send();
}

function showRadio(question) {
    document.getElementById("radio").style.display="block";
    document.getElementById("shortanswer").style.display="none";
    document.getElementById("checkbox").style.display="none";
    for(var i = 0; i < options.length; i++) {
        document.getElementById("radio" + options[i]).checked=false;
        if(question.options[options[i]]!=undefined){
            document.getElementById("radio" + options[i]).value = options[i];
            document.getElementById("lblRadio" + options[i]).innerHTML = question.options[options[i]];
            document.getElementById("radio" + options[i]).style.display="";
            document.getElementById("lblRadio" + options[i]).style.display="";
            if(answers[problem]!=undefined&&answers[problem]==options[i])
                document.getElementById("radio" + options[i]).checked=true;

        } else {
            document.getElementById("radio" + options[i]).style.display="none";
            document.getElementById("lblRadio" + options[i]).style.display="none";
        }
    }
}

function showCheckBox(question) {
    document.getElementById("radio").style.display="none";
    document.getElementById("shortanswer").style.display="none";
    document.getElementById("checkbox").style.display="block";
    for(var i = 0; i < options.length; i++) {
        document.getElementById("check" + options[i]).checked=false;                          
        if(question.options[options[i]]!=undefined){                        
            document.getElementById("lblCheck" + options[i]).innerHTML = question.options[options[i]];
            document.getElementById("check" + options[i]).style.display="";
            document.getElementById("lblCheck" + options[i]).style.display="";
            if(answers[problem]!=undefined&&answers[problem].indexOf(options[i])>=0)
                document.getElementById("check" + options[i]).checked=true;
        } else {
            document.getElementById("check" + options[i]).style.display="none";
            document.getElementById("lblCheck" + options[i]).style.display="none";
        }              
    }
}

function showShortAnswer(question) {
    document.getElementById("radio").style.display="none";
    document.getElementById("shortanswer").style.display="block";
    document.getElementById("checkbox").style.display="none";
    hint = 0;
    if(answers[problem]==undefined) {
        document.getElementById("txtShortanswer").value = "";
    } else {
        document.getElementById("txtShortanswer").value = answers[problem];
    }
    
}                        

function showQuestion(question) {
    hintnumber = 0;
    planshown = false;
    btnNextHint.removeAttribute("disabled");
    btnPrevHint.setAttribute("disabled", true);
    document.getElementById("prompt").innerHTML = question.prompt;
    document.getElementById("problem").innerHTML = problem + 1;
    log.innerHTML = "";
    if(sessionLog.problems[problem]==undefined){
        sessionLog.problems[problem] = {"prompt":question.prompt, "steps" :[]}
    } else {
        var steps = sessionLog.problems[problem].steps;
        if(steps.length > 0) {
            for(var i = 0; i < steps.length; i++) {
                log.append(newRow(steps[i]));                                    
            }
            log.lastChild.scrollIntoView();            
        }
    }
    if(question.image!=undefined) {
        document.getElementById("image").style.display="";
        document.getElementById("image").setAttribute("src", question.image);
    } else {
        document.getElementById("image").style.display="none";                    
    }
    pad.value = "";
    preview.innerHTML = "";
    if(question.type){
        if(question.type=="multiselect") {
            showCheckBox(question)
        } else if(question.type=="shortanswer") {
            showShortAnswer(question)
        }
    } else {
        showRadio(question)
    }
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    hintcard.style.display="none";                
}

function nextQuestion() {
    if(problem<questions.length-1) {
        recordAnswer();
        problem++;               
        showQuestion(questions[problem]);    
        document.getElementById("btnPrev").removeAttribute("disabled");
    } else {
        document.getElementById("btnNext").setAttribute("disabled", true);
        document.getElementById("btnCheck").removeAttribute("disabled");
    }                
}

function prevQuestion() {
    if(problem>0) {
        recordAnswer();
        problem--;
        showQuestion(questions[problem]);
        document.getElementById("btnNext").removeAttribute("disabled");
    } else {
        document.getElementById("btnPrev").setAttribute("disabled", true);
    }
}

function recordAnswer() {
    var answer="";
    var question = questions[problem];
    if(question.type == "shortanswer") {
        answer = document.getElementById("txtShortanswer").value
    } else if(question.type == "multiselect") {
        for(var i=0; i<options.length; i++) {
            if(document.getElementById("check"+options[i]).checked) {
                answer += options[i]
            }
        }
    } else {
        for(var i=0; i<options.length; i++) {
            if(document.getElementById("radio"+options[i]).checked) {
                answer += options[i]
            }
        }
    }
    console.log(answer);
    answers[problem]=answer;
}

function nextHint(){
    btnPrevHint.removeAttribute("disabled");
    if(hintnumber < questions[problem].hints.length) {
        var hint = hints[questions[problem].hints[hintnumber]];
        showHint(hint)
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        hintnumber++;
    } else {
        btnNextHint.setAttribute("disabled", true)
    }
}

function prevHint(){
    btnNextHint.removeAttribute("disabled");
    if(hintnumber > 0) {
        hintnumber--;
        var hint = hints[questions[problem].hints[hintnumber]];
        showHint(hint)
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    } else {
        btnPrevHint.setAttribute("disabled", true)
    }
}

var planshown = false;

function showHint(hintdata) {
    document.getElementById("hintname").innerHTML = hintdata.name;
    document.getElementById("description").innerHTML = hintdata.description;
    document.getElementById("example").innerHTML = hintdata.example;
    hintcard.style.display="block";
    if(!planshown) {
        if(questions[problem].solution != undefined) {
            if(questions[problem].solution.plan != undefined) {
                log.append(newRow(questions[problem].solution.plan));                
            }
            if(questions[problem].solution.start!=undefined) {
                pad.value = questions[problem].solution.start;
                preview.innerHTML = "`" + pad.value + "`";
                log.append("`" + pad.value + "`");  
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);                
            }
        }
        planshown = true;
    }
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);                
}            

function toggleFold(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function newRow(text) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = text;
    tr.append(td);
    return tr;
}            

function checkAnswers(){
    var correct = 0;
    var incorrect = 0;
    for(var i=0; i < answerkey.length; i++){
        if(answers[i]==answerkey[i]){
            log.append(newRow("Problem: " + (i + 1) + " Correct! " + answers[i]));
            correct++;
        } else {
            log.append(newRow("Problem: " + (i + 1) + " Incorrect.  You chose " + answers[i] + " Correct answer is " + answerkey[i]));
            incorrect++;
        }
    }
    log.append(newRow("Total Correct " + correct + " Total Incorrect " + incorrect));
    sessionLog["answers"] =answers;
    sessionLog["answerkey"]=answerkey;
    sessionLog["correct"]=correct;
    sessionLog["incorrect"]=incorrect;
    sessionLog["timestamp"]=new Date().toISOString();
    console.log(sessionLog);
    var path = sessionLog.timestamp;
    client.storeObject("SessionLog", path, sessionLog);
}

