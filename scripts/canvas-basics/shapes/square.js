//@ts-check
export class SquareShape {
    constructor(x, y, ctx, canvas) {
        this.directionX = 1;
        this.directionY = 1;

        this.ctx = ctx;
        this.canvas = canvas;

        this.x = x;
        this.y = y;

        this.width = 5;
        this.height = this.width;
        this.hue = 0;

        this.speedMult = 100;
        this.speedX = Math.floor(Math.random() * this.speedMult) + 1;
        this.speedY = Math.floor(Math.random() * this.speedMult) + 1;
        
    }
     update() {
        this.x += this.speedX * this.directionX;
        this.y += this.speedY * this.directionY;
        this.hue++;

        if(this.hue > 360) {
            this.hue = 0
        }

        if(this.x < 0) {
            //when of screen to the left move right
            this.directionX = 1
            //when of screen to the right move left
        } else if(this.x + this.width > this.canvas.width) {
            this.directionX = -1
        }

        if(this.y < 0) {
            //when of screen to the left move right
            this.directionY = 1
            //when of screen to the right move left
        } else if(this.y + this.height > this.canvas.height) {
            this.directionY = -1
        }
     }

     draw() {
        this.ctx.fillStyle= `hsla(${this.hue}, 100%, 50%, 100%)`;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
     }
}


