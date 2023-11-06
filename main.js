let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
let cor = document.getElementById("caixatextocor").value;

canvas.addEventListener("mousedown",desenharCirculo);

function desenharCirculo(e){
    cor = document.getElementById("caixatextocor").value;
let mousex = e.clientX - canvas.offsetLeft;
let mousey = e.clientY - canvas.offsetTop;
circulo(mousex, mousey);
}

function circulo(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = 2;
    ctx.arc(mousex,mousey,100,0,2*Math.PI);
    ctx.stroke();
}