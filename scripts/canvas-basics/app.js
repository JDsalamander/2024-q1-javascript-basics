//@ts-check

import { SquareShape } from "./shapes/square.js";
import { CircleShape } from "./shapes/circle.js";
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore canvas is an HTMLCanvasElement
const ctx = canvas.getContext("2d");



let shapes = [];

let spawnSquareX = 0;
let spawnSquareY = 0;
let spawnCircleX = 0;
let spawnCircleY = 0;

let SpawnPlaceChangerX = canvas.width;
let SpawnPlaceChangerY = canvas.height;
spawnSquareX = Math.floor(Math.random() * SpawnPlaceChangerX) ;
spawnSquareY = Math.floor(Math.random() * SpawnPlaceChangerY) ;
spawnCircleX = Math.floor(Math.random() * SpawnPlaceChangerX) ;
spawnCircleY = Math.floor(Math.random() * SpawnPlaceChangerY) ;       

for (let i = 0; i < 1000; i++) {
    shapes.push(new SquareShape(spawnSquareX, spawnSquareY, ctx, canvas));
    shapes.push(new CircleShape(spawnCircleX, spawnCircleY, ctx, canvas))
};
let s1 = new SquareShape(spawnSquareX, spawnCircleY, ctx, canvas);

let lastTime = 0;

function drawLoop (timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let elaspedTime = timestamp - lastTime;
    lastTime = timestamp;

    s1.draw();
    s1.update();

    for (const shape of shapes) {
        
        shape.update();
    shape.draw();
   
    }

    window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);