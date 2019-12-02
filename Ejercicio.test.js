const DutyFree = require('./ejercicioextends'),
Producto = DutyFree.Producto,
Perfume = DutyFree.Perfume,
Auriculares = DutyFree.Auriculares,
Chocolate = DutyFree.Chocolate,
productos = DutyFree.productos;



beforeEach(() => {
    productos.lista = [];
});

test("validar que el perfume que carguemos tenga todo lo de clases", () => {
    const perfume1 = new Perfume("Lacoste", 1000, 50);
    expect(perfume1.tipoProd).toBe("perfume");
    expect(perfume1 instanceof Producto).toBe(true)
});

test ("Validar que el chocolate creado sea chocolate y no perfume", () => {
    const chocolate1 = new Chocolate(70, false, "negro", null, "Savoy", 100, 40, 2);
    expect (chocolate1 instanceof Chocolate).toBe(true),
    expect (chocolate1 instanceof Perfume).toBe (false)
});

