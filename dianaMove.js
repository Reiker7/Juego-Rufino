class DianaM {
    constructor(w, h, ctx,) {
        this.ctx = ctx;
        this.canvasW = w;
        this.canvasH = h;

        this.img = new Image();
        this.img.src = "img/diana4.png"

        this.img.frames = 2;
        this.img.frameIndex = 0;
    


        this.x  = this.canvasW * 0.91;
        this.y = 250;
 


    
        this.w = 40;
        this.h = 100;
    
        this.dy = 0;
        this.dx = 0;
        this.dx += 0.52;
        this.bullets = [];
    }
    win(){
        this.img.frames = 1;
        this.img.frameIndex = 0;
        this.x = 120;
        this.y = 200;
        this.w = 800;
        this.h = 200;
        this.img.src = "img/win.png";
        
        setTimeout(() => {
                   Game.reset();
                
          }, 1500);

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

    
    move() {

        this.y -=0.5;


    }


    animateImg(frameCounter) {

        if(frameCounter % 6 === 0) {
            this.img.frameIndex++;

        }
      
        if(this.img.frameIndex > 1) this.img.frameIndex = 0;

    }

   

}