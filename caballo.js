class Caballo {

    constructor(w, y, dorsal, ctx) {
        this.ctx = ctx;
        this.canvasW = w;
      
        this.img = new Image();
        this.img.src = `img/caballo${dorsal}.png`;

        this.img.frames = 11;
        this.img.frameIndex = 0;
   
        // posicion original
        this.x  = this.canvasW * 0.01;
        this.y = y;
        
        // medidas imagenes
        this.w = 120;
        this.h = 100;
        
        // Los pixeles que se van a sumar a la x a cada frame
        this.dx = 1;
    }

    move() {
    
        this.x += this.dx;
    }

    draw(frameCounter) { 
        this.ctx.drawImage(
            this.img,

            // Subrectangulo de un frame del caballo
            this.img.frameIndex * Math.floor(this.img.width / this.img.frames), // x
            0, // y
            Math.floor(this.img.width / this.img.frames), // w
            this.img.height, // h

            // Dibujar el subrectangulo seleccionado arriba en la posicion (x,y) al tamaño (w,h)
            this.x,
            this.y,
            this.w,
            this.h,
        )
    
        this.animateImg(frameCounter)
    }

    animateImg(frameCounter) {

        if(frameCounter % 6 === 0) {
            this.img.frameIndex++;

        }
        // mirar valor 2 para imagen repetida
        if(this.img.frameIndex > 10) this.img.frameIndex = 0;

    }

}

class CaballoIA extends Caballo {
    constructor(w, y, dorsal, ctx) {
        super(w, y, dorsal, ctx)
        this.dx = Math.random() * (0.4 - 0.7) + 0.7;
    }
}

class CaballoPlayer extends Caballo {
    constructor(w, y, dorsal, ctx) {
        super(w, y, dorsal, ctx)
        this.dx = 0.1;
    }

    acelera(impacto) {
        this.x += impacto 
    }
    desacelera(impacto) {
        this.x -= impacto 
    }
}


