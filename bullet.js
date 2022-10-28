class Bullet {
    constructor(x, y, y0, h, ctx) {
        this.x = x;
        this.y = y;
        this.y0 = y0;

        this.h = h;

        this.ctx = ctx;
        this.r = 5;
        this.vx = 10;
        // velocidad
        this.vy = 1;

        this.gravity = 0.25;
    }

    draw(){

        //console.log("x: " + this.x + " y: " + this.y)
        this.ctx.beginPath();
        this.ctx.fillStylye = "red";
        this.ctx.arc(this.x, this.y,this.r,0,Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();

        
        
    }
    move(){
        this.x += this.vx;

    }
}