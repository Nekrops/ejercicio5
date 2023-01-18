class Gasto extends Dato {
    static _gastosTotal = 0;

    constructor(dato, texto) {
        super(-dato, texto);
        Gasto._gastosTotal += this._dato;
    }

    /* ---------------------- GETTERS ---------------------- */

    static get gastosTotal() { return Dato.darFormato(Gasto._gastosTotal); }

    get dato() { return super.dato }

    /* ---------------------- SETTERS ---------------------- */

    static set gastosTotal(gastosTotal) { Gasto._gastosTotal = gastosTotal; }

    set dato(dato) { 
        Gasto._gastosTotal -= this._dato;
        super.dato = -dato;
        Gasto._gastosTotal += this._dato;
    }

    /* ---------------------- MÉTODOS DEL OBJETO ---------------------- */

    // Al eliminar un dato lo quitamos del saldo y del gasto total
    eliminarDato() { 
        super.eliminarDato()
        Gasto._gastosTotal -= this._dato;
    }

    // Muestra el porcentaje
    porcentaje() { return (this._dato / Gasto._gastosTotal).toLocaleString(undefined, { style: 'percent', maximumFractionDigits: 2 }); }
}