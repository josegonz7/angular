export class Producto {

    constructor(
        private _cantidad: number,
        private _codbarras: string,
        private _fechaLanzamiento: Date,
        private _marca: number,
        private _modelo: string,
        private _precio: number
    ) {}

    get cantidad (): number  {
        return this._cantidad;
    }
    set cantidad (value: number) {
        this._cantidad = value;
    }
    get marca (): number  {
        return this._marca;
    }
    set marca (value: number) {
        this._marca = value;
    }
}
