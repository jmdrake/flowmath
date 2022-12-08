var canvas, ctx, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false,
altDown = false
altKey = 18,
tKey = 84
imgCount = 0;

var x = "black",
    y = 2;

function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function color(obj) {
    x = window.getComputedStyle(obj, null).getPropertyValue("background-color");
    if (x == "rgb(255, 255, 255)") y = 14;
    else y = 2;
    // alert(x)
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase(){
    var m = confirm("Want to clear");
    if(m){
        ctx.clearRect(0, 0, w, h);
    }
}

document.addEventListener('keydown', (event) =>{
    if(event.key == "Delete") erase()
});

function save(){
    var saved = document.getElementById("savedScribbles");
    var dataURL = canvas.toDataURL();
    imgCount += 1
    var img = document.createElement("img");
    setClass = document.createAttribute("class");
    setClass.value = "canvasimg canvasimg"+imgCount;
    img.setAttributeNode(setClass);
    img.src = dataURL;
    saved.appendChild(img);
}

function findxy(res, e){
    if(res == 'down'){
        prevX = currX;
        prevY = currY;
        // currX = e.clientX - canvas.offsetLeft;
        // currY = e.clientY - canvas.offsetTop;

        // currX = e.clientX;
        // currY = e.clientY;        
        currX = e.X;
        currY = e.Y;

        flag = true;
        dot_flag = true;
        if (dot_flag){
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

function drawSquare(){
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = x;
    ctx.rect(currX, currY, 100, 100);
    ctx.stroke();
}

function drawRectangle(){
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = x;
    ctx.rect(currX, currY, 150, 100);
    ctx.stroke();
}

function drawCircle(){
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = x;
    ctx.arc(currX, currY, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

// $(document).ready(function(){
//     function keyCommands(key){
//         // var canvas = document.getElementById("myCanvas");
//         // var ctx = canvas.getContext("2d");
//         // ctx.font = "30px Arial";
//         // ctx.fillText("Hello World",10,50);
//         if(altDown){
//             if(key == tKey){
//                 alert("Pressed T")
//             }else{
//                 alert("Invalid Command!")
//             }
//         }
        
//     }

//     $(document).keydown(function(e) {
//         if (e.keyCode == altKey) altDown = true;
//     }).keyup(function(e) {
//         if (e.keyCode == altKey) altDown = false;
//     });
    
//     // Document Ctrl + T for text input 
//     $(document).keydown(function(e) {
//         keyCommands(e.keyCode)
//     });

// })
var keysPressed = {};

document.addEventListener('keydown', (event) =>{
    keysPressed[event.key] = true;
    
    if (keysPressed['Alt'] && event.key == 't'){
        var txt = "";
        textBox = document.getElementById("textBox");
        textBox.style.top = currY-20;
        textBox.style.left = currX;
        textBox.style.display = "block";
        textBox.style.color = x;
        textBox.focus()
        textBox.addEventListener('keydown', (e) =>{
            if(e.key == 'Enter'){
                txt = textBox.value
                textBox.value = ""
                txt = txt.split("-")
                res = txt[0]
                fs = txt[1]
                ff = txt[2]
                if(txt[1] == null) fs = "20"
                if(txt[2] == null) ff = "Arial"
                // alert("FF:"+ff+"\nFS:"+fs)
                textBox.style.display = "none"
                ctx.font = fs + "px " + ff;
                ctx.fillText(res, currX, currY);
            }
        });
    }
    if (keysPressed['Alt'] && event.key == 'b'){
        obj = document.getElementById("black");
        x = window.getComputedStyle(obj, null).getPropertyValue("background-color");
        y = 2;
    }
    if (keysPressed['Alt'] && event.key == 'y'){
        obj = document.getElementById("yellow");
        x = window.getComputedStyle(obj, null).getPropertyValue("background-color");
        y = 14
    }
    if (keysPressed['Alt'] && event.key == 'g'){
        obj = document.getElementById("green");
        x = window.getComputedStyle(obj, null).getPropertyValue("background-color");
        y = 2
    }
    if (keysPressed['Alt'] && event.key == 'c'){
        obj = document.getElementById("cyan");
        x = window.getComputedStyle(obj, null).getPropertyValue("background-color");
        y = 2
    }
    if (keysPressed['Alt'] && event.key == 'r'){
        obj = document.getElementById("red");
        x = window.getComputedStyle(obj, null).getPropertyValue("background-color");
        y = 2
    }
    if (keysPressed['Alt'] && event.key == 'o'){
        obj = document.getElementById("orange");
        x = window.getComputedStyle(obj, null).getPropertyValue("background-color");
        y = 2
    }
    if (keysPressed['Alt'] && event.key == 'w'){
        obj = document.getElementById("white");
        x = window.getComputedStyle(obj, null).getPropertyValue("background-color");
        y = 14
    }
    // Draw Shapes
    if (keysPressed['Alt'] && event.key == 'z'){
        cmd = prompt("Enter command: ");
        if(cmd == "sqr") drawSquare();
        else if(cmd == "rect") drawRectangle();
        else if(cmd == "circ") drawCircle();
        else alert("Invalid Command");
    }
});

document.addEventListener('keyup', (event) =>{
    delete keysPressed[event.key];
});