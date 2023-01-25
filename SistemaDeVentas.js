class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProduct(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre ${this._nombre}, precio $${this._precio}`
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProductos( producto ){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push( producto );
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log("No se puede agregar mas productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for( let producto of this._productos){

        }
    }
}
let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 140);

console.log(producto1.toString());
console.log(producto2.toString());