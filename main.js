var canvas=document.getElementById("Mycanvas");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth=6;
ctx.strokeStyle="green";
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=6;
ctx.strokeStyle="blue";
ctx.arc(250,200,40,0=Math.PI);
ctx.stroke();
