class Player {
    constructor(w, h, ctx, keys) {
        this.ctx = ctx;
        this.canvasW = w;
        this.canvasH = h;

        this.keys = keys;

        this.img = new Image();
        this.img.src = "img/heligun.png"

        this.img.frames = 4;
        this.img.frameIndex = 0;
        this.setListeners();

  
        this.x = this.canvasW * 0.02;
        this.y = this.canvasH * 0.08;


        this.w = 112;
        this.h = 45;
  
        
        this.dy = 0;
        this.bullets = [];
   
    }
    setListeners() {
        document.onkeydown = function(event) {
            if (event.keyCode === this.keys.TOP_KEY ){
                this.dy =-5
    
            
            };
            if (event.keyCode === this.keys.BOT_KEY ){
                this.dy =5

            
            };
            if (event.keyCode === this.keys.D_KEY ){
               
                  this.shoot();
               
                  
    
                
            
            };
            if (event.keyCode === this.keys.A_KEY ){
                
                Game.reset();

            
            };
        }.bind(this)

        document.onkeyup = function(event) {
            if (event.keyCode === this.keys.TOP_KEY ){
                this.dy = 0

            };
            if (event.keyCode === this.keys.BOT_KEY ){
                this.dy = 0
  
            }
                

        }.bind(this)
 
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
 

        this.y += this.dy;


    }

    animateImg(frameCounter) {

        if(frameCounter % 6 === 0) {
            this.img.frameIndex++;

        }

        if(this.img.frameIndex > 3) this.img.frameIndex = 0;

    }

    shoot(){


        const bullet = new Bullet(
            this.x + this.w,
            this.y + this.h / 1.1 ,
            this.y0,
            this.h,
            this.ctx,
            )
            this.bullets.push(bullet)
        
    }
    explo(){
        this.w = 100;
        this.h = 100;
        this.img.src = "img/heligunE.png";
        
        setTimeout(() => {
                   Game.reset();
                
          }, 500);

    }
    

}

