/**
 * Refactorizar la lista de productos con el 
 * carrito de compras usando clases. 
 * Vamos a tener 3 tipos de productos, 
 *  1. Perfumes
 *  2. Chocolates
 *  3. Auriculares
 * Los 3 productos van a tener distintas 
 * caracteristicas, aunque compartan marca y precio.
 * Los chocolates tienen porcentaje, leche, tipo, 
 * extras (almendras, mani, pasas). 
 * Los auriculares van a tener una variable
 * "wireless" y una "tipo" (cerrados, abiertos)
 * 
 * Voy a necesitar un metodo que me devuelva una lista
 * formateada con todos los productos y caracteristicas 
 * en un texto. Uno por linea.
 * 
 * Ademas de eso cada producto puede tener descuentos, en 
 * porcentaje.
 * 
 * Hay que refactorizar el carrito de compras, de forma
 * que tenga lo mismo que hacia antes, pero a la hora de 
 * calcular el precio, lo haga teniendo en cuenta los
 * descuentos que aplican a cada producto.
 *  * El carrito tiene que tener una funcion que me permita
 * listar todos los productos agregados formateados con 
 * descripcion, cantidad, y un producto por linea.
 * 
 * Por ultimo sumar una clase cupon que tiene otro descuento
 * en porcentaje. Yo puedo aplicar un solo cupon a mi carrito
 * de compras y el calculo final del precio tiene que tomar
 * en cuenta esto.
 * 
 */

const productos = {
    lista: [],
    agregar: function (producto) {
        this.lista.push(producto)
    }
}

class Producto {
    constructor(tipoProd, marca, precio, descuentos, id) {
        this.tipoProd = tipoProd;
        this.marca = marca;
        this.precio = precio;
        this.descuentos = descuentos;
        this.id = id;
        productos.agregar(this)
    }

}

class Perfume extends Producto {
    constructor(marca, precio, descuentos, id) {
        super("perfume", marca, precio, descuentos, id)

    }

    get info() {
        return `El perfume ${this.marca} tiene un costo de ${this.precio} pesos, con un descuento del ${this.descuentos}%`
    }
}


class Chocolate extends Producto {
    constructor(porcentaje, leche, tipo, extras, marca, precio, descuentos, id) {
        super("chocolate", marca, precio, descuentos, id)
        this.porcentaje = porcentaje;
        this.leche = leche;
        this.tipo = tipo;
        this.extras = extras;
    }

    get info() {
        return `El chocolate ${this.marca} tiene un porcentaje de cacao del ${this.porcentaje}%, 
        tiene un precio de ${this.precio} pesos y tiene un descuento del ${this.descuentos}%`
    }
    // _extrasPosibles = ["almendras", "mani", "pasas", null]
}

class Auriculares extends Producto {
    constructor(wireless, tipo, marca, precio, descuentos, id) {
        super("auricular", marca, precio, descuentos, id)
        this.wireless = wireless;
        this.tipo = tipo;
    }
    get info() {
        return `Los auriculares tipo ${this.tipo}, de la marca ${this.marca} tienen un costo de ${this.precio} 
        y tiene un descuento del ${this.descuentos}%`
    }
}


/*const perfume1 = new Perfume("Lacoste", 1000, 50, 1)
const chocolate1 = new Chocolate(70, false, "negro", null, "Savoy", 100, 40, 2)
const auricular1 = new Auriculares(false, "Gamer", "Razer", 8000, 10, 3)*/


module.exports = {
    Auriculares, Chocolate, Perfume, productos, Producto
}