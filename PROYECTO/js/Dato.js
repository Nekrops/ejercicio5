class Dato {
    static _saldoTotal = 0;
    
    constructor(dato, texto) {
        this._dato = parseFloat(dato.toFixed(2));
        this._texto = texto;
        Dato._saldoTotal += this._dato;
    }

    /* ---------------------- GETTERS ---------------------- */

    static get saldoTotal() { return Dato.darFormato(Dato._saldoTotal); }

    get dato() { return Dato.darFormato(this._dato); }
    get texto() { return this._texto; }

    /* ---------------------- SETTERS ---------------------- */

    static set saldoTotal(saldoTotal) { Dato._saldoTotal = saldoTotal; }

    set dato(dato) { 
        Dato._saldoTotal -= this._dato;
        this._dato = dato; 
        Dato._saldoTotal += this._dato;
    }
    set texto(texto) { this._texto = texto; }

    /* ---------------------- MÉTODOS DE LA CLASE ---------------------- */

    // Muestra el número con su signo, con 2 decimales y en el idioma del usuario
    static darFormato(numero) { 
        let signo;
        if (numero > 0) signo = '+ ';
        else if (numero < 0) signo = '- ';
        else signo = '';
        return signo + Math.abs(numero).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); 
    }

    /* ---------------------- MÉTODOS DEL OBJETO ---------------------- */

    // Al eliminar un dato lo quitamos del saldo
    eliminarDato() { Dato._saldoTotal -= this._dato; }

    toString() {
        return `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${this.texto}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${this.dato}</div>
                <div class="elemento_porcentaje"></div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline"></ion-icon>   
                    </button>
                </div>
            </div>
        </div>`;
    }
}