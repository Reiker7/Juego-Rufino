class Layer {
    constructor(w, h, y, dx, lay,ctx) {
        this.ctx = ctx;
        this.w = w;
        this.h = h;

        this.img = new Image();
        this.img.src = `img/layer${lay}.png`;

        this.x = 0;
        this.y = y;

    
        this.dx = dx;
    }
    

    draw(){
      
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h,
        )

        this.ctx.drawImage(
            this.img,
            this.x + this.w,
            this.y,
            this.w,
            this.h,
        )
    }

    move(){
        this.x -= this.dx

        if( this.x < -this.w) this.x = 0
     
        
    }
}