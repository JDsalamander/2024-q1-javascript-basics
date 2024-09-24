//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore canvas is an HTMLCanvasElement
const ctx = canvas.getContext("2d");





let lastTime = 0;
let hue = 0;
let outlineHue = 100;
let x1 = 0;
let y1 = 0;
let speed = 10;

function drawLoop (timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let elaspedTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.fillStyle= `hsla(${hue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 1000, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 1000, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 950, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 900, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 850, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 800, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 750, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 700, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 650, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 600, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 550, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 500, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 450, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 400, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 350, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 300, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 250, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 200, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 150, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 100, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= `hsla(${outlineHue}, 100%, 50%, 100%)`;
    ctx.arc(x1, y1, 50, 0, Math.PI * 2);
    ctx.stroke();
    hue += 3;
    outlineHue += 3;
    x1 += speed
    y1 += speed

    window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);