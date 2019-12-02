/**
 * Crear una clase Ropa, con propiedades
 * que me permitan definir sus 
 * caracteristicas basicas (nombre,
 * tipo, medidas, y pensar otras), y me permita 
 * hacer metodos para "ponerme" la ropa.
 * De esta forma, yo deberia poder
 * tener, por ejemplo, un metodo
 * "calzar" que no funcione si 
 * es una pollera, pero si 
 * funcione si es una zapatilla.
 */


class Vestimenta {
    constructor(lavable = true) {
        this.lavable = lavable;
    }
}

class Ropa extends Vestimenta {
    constructor(nombre, color, talle,) {
        super (lavable = true)
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
    }
    seLava() {
        if (this.lavable == false) {
            return "Eso no se puede lavar"
        }
        return "Ok, vamos a lavarla."
    }
}

class ParteSuperior extends Ropa {
    constructor(subtipo) {
        super("Camisa", "Camisa lisa", "Blanca", "Grande", lavable = true);
        this.subtipo = subtipo;
    }
    
}

class ParteInferior extends Ropa {
    constructor(subtipo) {
        super("Short", "Shortcito", "Jean", "Mediano", lavable = true);
        this.subtipo = subtipo;
    }
}

class Calzado extends Ropa {
    constructor(subtipo, nombre, color, talle, cordones = true,) {
        super("Zapatilla", "Converse", "Verde", 9, cordones = true, lavable = false);
        this.subtipo = subtipo
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.cordones = cordones;
    }

    taconea() {
        if (this.nombre != "Tacones") {
            throw "No taconea porque no es un tacon"
        }
        return "Hermosos tacones."
    }
    talles() {
        if ((this.talle < 10) && (this.talle > 0)) {
            return "Tenemos talle"
        }
        throw "Ok, no tenemos talle"
    }
    amarrarCordones() {
        if (cordones === false) {
            return "No usa cordones. "
        }
        return "Ok, amarrate los cordones o te vas a caer."
    }
    seLava() {
        if (this.lavable == false) {
            return "Eso no se puede lavar"
        }
        return "Ok, vamos a lavarla."
    }

}

const jean = new ParteInferior("Blue Jean", "Pantaloncito", "Azul", "Medio", lavable = true)

const falda = new ParteInferior("faldita", "corta", "negra", 10, true)

const remera = new ParteSuperior("remera", "rockera", "azul", 1, true)

const zapato = new Calzado("Zapatilla", "Nike", "rosa", 11, cordones = true, lavable = false)

const tacones = new Calzado("Tacon", "Tacones", "rojo", 8, cordones = false, lavable = false)
