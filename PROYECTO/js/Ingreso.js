class Ingreso extends Dato {
    static _ingresosTotal = 0;

    constructor(dato, texto) {
        super(dato, texto);
        Ingreso._ingresosTotal += this._dato;
    }

    /* ---------------------- GETTERS ---------------------- */

    static get ingresosTotal() { return Dato.darFormato(Ingreso._ingresosTotal); }

    get dato() { return super.dato }

    /* ---------------------- SETTERS ---------------------- */

    static set ingresosTotal(ingresosTotal) { Ingreso._ingresosTotal = ingresosTotal; }

    set dato(dato) { 
        Ingreso._ingresosTotal -= this._dato;
        super.dato = dato;
        Ingreso._ingresosTotal += this._dato;
    }

    /* ---------------------- MÉTODOS DEL OBJETO ---------------------- */

    // Al eliminar un dato lo quitamos del saldo y del ingreso total
    eliminarDato() { 
        super.eliminarDato()
        Ingreso._ingresosTotal -= this._dato;
    }

    // Muestra el porcentaje
    porcentaje() { return (this._dato / Ingreso._ingresosTotal).toLocaleString(undefined, { style: 'percent', maximumFractionDigits: 2 }); }
}