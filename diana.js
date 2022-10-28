class Diana {
    constructor(w, y, dianaN, ctx,) {
        this.ctx = ctx;
        this.canvasW = w;
 


        this.img = new Image();
        this.img.src = `img/diana${dianaN}.png`

        this.img.frames = 2;
        this.img.frameIndex = 0;
    
        this.x  = this.canvasW * 0.99;
        this.y = y;

   

        this.w = 40;
        this.h = 60;
    
        this.dy = 0;
        this.dx = 0;
        this.dx += 0.12;
        this.bullets = [];
    }


    draw(frameCounter) { 
  
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
            0,
            Math.floor(this.img.width / this.img.frames),

            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h,
        )
    
        this.animateImg(frameCounter)

        this.bullets = this.bullets.filter((bullet) => bullet.x < this.canvasW)

        this.bullets.forEach((bullet) => {
            bullet.draw();
            bullet.move();
        })

    }


    animateImg(frameCounter) {

        if(frameCounter % 20 === 0) {
            this.img.frameIndex++;

        }
      
        if(this.img.frameIndex > 1) this.img.frameIndex = 0;

    }


}