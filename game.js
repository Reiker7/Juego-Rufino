
const Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    keys: {
        TOP_KEY: 87,
        BOT_KEY: 83,
        D_KEY: 68,
        A_KEY: 65,
    },
    
    
    init: function () {
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext("2d")

        this.start()
    },

    start: function () {
        this.reset();

        this.interval = setInterval(() => {



            this.frameCounter++;


            if(this.frameCounter > 1000) {
                this.frameCounter = 0;
            }

            if(this.frameCounter % 50 === 0) {
                this.generateObstacle()
               
                
            }

            this.moveAll();
            this.drawAll();

            this.clearObstacles()
            this.clearBullets()


            if(this.isImpacto1()) {
                console.log("5")
                this.caballoPlayer.acelera(5);
            }
            if(this.isImpacto2()) {
                console.log("2")
                this.caballoPlayer.acelera(2);
            }
            if(this.isImpacto3()) {
                console.log("1")
                this.caballoPlayer.acelera(1);
            }
            if(this.isImpacto4()) {
                console.log("4")
                this.caballoPlayer.desacelera(1);
            }
            
            if(this.isCollision()) {
                this.gameOver();
            }

            if(this.isCollision2()) {
                this.gameOver();
            }

           
            
        }, 1000 / this.fps);

    },

    reset: function(){
        this.background = new Background(this.canvas.width, this.canvas.height, this.ctx)
        this.diana1 = new Diana(this.canvas.width, this.canvas.height * 0.01, "1", this.ctx),
        this.diana2 = new Diana(this.canvas.width,  this.canvas.height * 0.15, "2", this.ctx),
        this.diana3 = new Diana(this.canvas.width,  this.canvas.height * 0.29, "3", this.ctx),
        this.dianaM = new DianaM(this.canvas.width,  this.canvas.height * 0.40, this.ctx),
        this.layer1 = new Layer(6800,  100, 600, 5, "1", this.ctx)
        this.layer2 = new Layer(7000,  250, 0, 2, "2",this.ctx)
        this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys),

        this.caballoPlayer = new CaballoPlayer(this.canvas.width, this.canvas.height * 0.77, "P", this.ctx)
        this.caballo1 = new CaballoIA(this.canvas.width, this.canvas.height * 0.86, "1", this.ctx)
        this.caballo2 = new CaballoIA(this.canvas.width, this.canvas.height * 0.83, "2", this.ctx)
        this.caballo3 = new CaballoIA(this.canvas.width, this.canvas.height * 0.80, "3", this.ctx)

        


        
        this.obstacles = []
        this.frameCounter = 0

    },

    moveAll: function () {
       
        this.background.move()
        this.layer1.move()
        this.player.move()
        this.layer2.move()
        this.dianaM.move()
        this.caballoPlayer.move()
        this.caballo1.move()
        this.caballo2.move()
        this.caballo3.move()
        this.obstacles.forEach(obstacle => {
            obstacle.move()
        })


    },

    drawAll: function () {
       
        this.background.draw()
        
        this.player.draw(this.frameCounter)

      

        this.caballoPlayer.draw(this.frameCounter)
        this.caballo3.draw(this.frameCounter)
        this.caballo2.draw(this.frameCounter)
        this.caballo1.draw(this.frameCounter)
        this.obstacles.forEach(obstacle => {
            obstacle.draw(this.frameCounter)

        })
        this.layer1.draw()
        this.layer2.draw()
        this.diana1.draw(this.frameCounter)
        this.diana2.draw(this.frameCounter)
        this.diana3.draw(this.frameCounter)
        this.dianaM.draw(this.frameCounter)
    },

    stop: function () {
        clearInterval(this.interval)
        
    },

    avance: function () {
        
        console.log("prueba")
    },
    


    generateObstacle: function() {
        this.obstacles.push(
            new Obstacle(this.canvas.width, this.player.y, this.player.h, this.ctx)
        )
        
    },
    clearObstacles: function() {
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.y >= 
        (y = 0))
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.x >= 
        (x = 0))
    },

    clearBullets: function() {
  
    ((obstacle) => obstacle.y >= 0)
    this.player.bullets = this.player.bullets.filter((bullet) => bullet.x + bullet.r <= this.canvas.width )

    },


    

    // Daño a helicoptero
    isCollision: function() {
        // console.log("colision")
        return this.obstacles.some(obstacle => {
            return (this.player.x + this.player.w >= obstacle.x &&
            this.player.x < obstacle.x + obstacle.w &&

            this.player.y + this.player.h  >= obstacle.y && 
            this.player.y <= obstacle.y + obstacle.h 
            
            )
       
        })
    },

    isImpacto1() {
        return this.player.bullets.some(bullet => {

        
            return (
            bullet.x + bullet.r >= this.diana1.x &&
            bullet.x - bullet.r <= this.diana1.x + this.diana1.w &&
            bullet.y + bullet.r >= this.diana1.y &&
            bullet.y - bullet.r <= this.diana1.y + this.diana1.h
          
            )
        })
    },
    isImpacto2() {
        return this.player.bullets.some(bullet => {

        
            return (
            bullet.x + bullet.r >= this.diana2.x &&
            bullet.x - bullet.r <= this.diana2.x + this.diana2.w &&
            bullet.y + bullet.r >= this.diana2.y &&
            bullet.y - bullet.r <= this.diana2.y + this.diana2.h
          
            )
        })
    },

    isImpacto3() {
        return this.player.bullets.some(bullet => {

        
            return (
            bullet.x + bullet.r >= this.diana3.x &&
            bullet.x - bullet.r <= this.diana3.x + this.diana3.w &&
            bullet.y + bullet.r >= this.diana3.y &&
            bullet.y - bullet.r <= this.diana3.y + this.diana3.h
          
            )
        })
    },
    isImpacto4() {
        return this.player.bullets.some(bullet => {

        
            return (
            bullet.x + bullet.r >= this.dianaM.x &&
            bullet.x - bullet.r <= this.dianaM.x + this.dianaM.w &&
            bullet.y + bullet.r >= this.dianaM.y &&
            bullet.y - bullet.r <= this.dianaM.y + this.dianaM.h
          
            )
        })
    },
    

    // Caballos llegan al final
    isCollision2: function() {
        if (this.dianaM.y   === (y = 250)){
            // >= this.canvas.height / 2) 
         
            
            this.dianaM.moveT()
        }
        if (this.dianaM.y    === (y = 0)){
            // >= this.canvas.height / 2) 
         
            
            this.dianaM.moveD()
        }
 
        
         if (this.player.y  <= (y = 0)) {
            this.gameOver2()
         }
         if (this.player.y + this.player.h + 10 >=  this.canvas.height) {
            this.gameOver()
         }
           if (this.caballoPlayer.x + this.caballoPlayer.w >=  this.canvas.width + 40) {
            this.winner() 
           }
           if (this.caballo3.x + this.caballo3.w >=  this.canvas.width + 40) {
            this.gameOver() 
           }
           if (this.caballo2.x + this.caballo2.w >=  this.canvas.width + 40) {
            this.gameOver() 
           }
           if (this.caballo1.x + this.caballo1.w >=  this.canvas.width + 40) {
            this.gameOver() 
           }              
           
    },

    gameOver: function() {
        
        
        
        this.stop();

        if(confirm("GAME OVER. JUEGAS DE NUEVO?")) {
            this.reset();
            this.start();
        }
    },

    gameOver2: function() {
        this.player.explo()
        // this.dianaM.win()

    },
    
    winner: function() {

        this.dianaM.win()
    
        // this.stop();

        // if(confirm("HAS GANADO")) {
        //     this.reset();
        //     this.start();
        // }
    }

    
}
