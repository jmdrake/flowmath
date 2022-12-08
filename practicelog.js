window.addEventListener("load", function(){
    loadDoc("practicelog.html", "practicelog", function(){
        client.getAll('').then(objects => {
            for (var path in objects) {
                session = objects[path];
                practicehistory[practicehistory.length] = {
                    date : session.timestamp,
                    assessment : session.assessment,
                    assessmentscript : session.assessmentscript,
                    session : path,
                    link : "assessment.html?assessment="+session.assessmentscript+"&session="+path,
                    score : Math.floor(session.correct / (session.correct + session.incorrect) * 100)
                };
                console.log(path, objects[path]);
            }
            var row = document.querySelector(".datarow");
            var logtable = row.parentElement;
            for(var i=0; i<practicehistory.length; i++) {
                var newrow = row.cloneNode(true);
                populateHTML(newrow, practicehistory[i]);
                logtable.append(newrow);
            }
            row.remove();
        });        
    })
})

var practicehistory = [];
    
/*    
var practicehistory = [
    {
        date : "11/1/2022",        
        assessment : "CLEP Algebra 1 Sample",
        assessmentscript : "CLEPAlgebraSample.js",
        session : "2423sdfaswd",
        link : "assessment.html?assessment=CLEPAlgebraSample.js&session=2423sdfaswd",
        score : "50"
    },
    {
        date : "11/2/2022",
        assessment : "CLEP Algebra 1 Sample",
        assessmentscript : "CLEPAlgebraSample.js",        
        link : "assessment.html?assessment=CLEPAlgebraSample.js&session=2423423423d",
        session : "2423423423d",
        score : "55"
    },
    {
        date : "11/3/2022",
        assessment : "CLEP Algebra 1 Sample",
        assessmentscript : "CLEPAlgebraSample.js",
        link : "assessment.html?assessment=CLEPAlgebraSample.js&session=sadpiorew4353",
        session : "sadpiorew4353",
        score : "75"
    }    
];*/
