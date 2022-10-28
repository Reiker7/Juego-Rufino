
class Obstacle {
    constructor(w, y,playerH, ctx) {
this.ctx = ctx ;

this.h = 10 ;
this.w = this.h * 1;


this.dx = 10;

this.dy = Math.floor(Math.random() * 5) + 1;

this.x = w;

this.y = y + Math.floor(Math.random() * 100) + 200;


 }
draw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
}
move() {
    this.x -= this.dx;
    this.y -= this.dy;
}
 

}