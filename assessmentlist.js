window.addEventListener("load", function(){
    loadDoc("assessmentlist.html", "assessments", function(){
        var row = document.querySelector(".assessmentrow");
        for(var i=0; i<assessmentlinks.length; i++) {
            var newrow = row.cloneNode(true);
            var anchor = newrow.querySelector("a");
            anchor.setAttribute("href", "assessment.html?assessment="+assessmentlinks[i].link);
            anchor.innerHTML = assessmentlinks[i].name;
            assessments.append(newrow);
        }
        row.remove();
    })
});
    
var assessmentlinks = [
    {
        link : "CLEPAlgebraSample.js",
        name : "CLEP Algebra Sample"
    },
    {
        link : "CLEPAlgebraFinal.js",
        name : "CLEP Algebra Final"
    }
];
