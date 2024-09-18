//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore canvas is an HTMLCanvasElement
const ctx = canvas.getContext("2d");


ctx.fillRect(50,0,50,100);
ctx.fillRect(75,25,50,100);
ctx.fillRect(100,50,50,100);
ctx.fillRect(125,75,50,100);
ctx.fillRect(150,100,50,100);
ctx.fillRect(175,125,50,100);
ctx.fillRect(200,150,50,100);
ctx.fillRect(225,175,50,100);
ctx.fillRect(250,200,50,100);
ctx.fillRect(275,225,50,100);
ctx.fillRect(300,250,50,100);
ctx.fillRect(325,275,50,100);
ctx.fillRect(350,300,50,100);
ctx.fillRect(375,325,50,100);
ctx.fillRect(400,350,50,100);
ctx.fillRect(425,375,50,100);
ctx.fillRect(450,400,50,100);
ctx.fillRect(475,425,50,100);
ctx.fillRect(500,450,50,100);
ctx.fillRect(525,475,50,100);
ctx.fillRect(550,500,50,100);
ctx.fillRect(575,525,50,100);
ctx.fillRect(600,550,50,100);
ctx.fillRect(625,575,50,100);
ctx.fillRect(650,600,50,100);
ctx.fillRect(675,625,50,100);
ctx.fillRect(700,650,50,100);
ctx.fillRect(725,675,50,100);
ctx.fillRect(750,700,50,100);
ctx.fillRect(775,725,50,100);
ctx.beginPath();
ctx.arc(500, 100, 50, 0, Math.PI * 2);
ctx.fill();