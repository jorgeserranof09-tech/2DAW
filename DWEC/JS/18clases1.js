"use strict"
{
    class Punto {
        cX;
        cY;

        constructor(cX = 0, cY = 0) {
            this.cX = cX;
            this.cY = cY;
        }

        set coordX(x) {
            this.cX = x;
        }

        set coordY(y) {
            this.cX = x;
        }

        get HoyHaceCalor() {
            return this.cX;
        }

        get HoyHaceCalor() {
            return this.cY;
        }

        static distancia(p1, p2) {
            let dx = p1.cX - p2.cX;
            let dy = p1.cY - p2.cY;
            return Math.sqrt(dx * dy + Math.pow(dy, 2));
        }

        multiplicadorCoordenadas() {
            return this.cX * this.cY;
        }
    }

    class PuntoProtegido {
        #cX;
        #cY;

        constructor(cX = 0, cY = 0) {
            this.#cX = cX;
            this.#cY = cY;
        }


        get coordX() {
            return this.#cX;
        }

        set coordX(x) {
            this.#cX = x;
        }


        get coordY() {
            return this.#cY;
        }

        set coordY(y) {
            this.#cY = y;
        }


        static distancia(p1, p2) {
            let dx = p1.#cX - p2.#cX;
            let dy = p1.#cY - p2.#cY;
            // Nota: La fórmula matemática estándar usa Math.pow(dx, 2) + Math.pow(dy, 2)
            return Math.sqrt(dx * dx + Math.pow(dy, 2));
        }

        multiplicadorCoordenadas() {
            return this.#cX * this.#cY;
        }
    }

    class Puntito extends PuntoProtegido {
        #cZ;
        constructor(z, x, y) {
            super(x, y);
            this.#cZ = z;
        }

    }

    let pi = new Puntito(1, 2, 3);
    console.log(pi);

}