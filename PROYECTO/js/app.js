let ingresos = [], gastos = [];
let listaIngresos, listaGastos, saldoTotal, ingresoTotal, gastoTotal, ultimaPos;

function cargarApp() {
    listaIngresos = document.getElementById("lista-ingresos");
    listaGastos = document.getElementById("lista-gastos");
    saldoTotal = document.getElementById("saldo");
    ingresoTotal = document.getElementById("ingresos");
    gastoTotal = document.getElementById("gastos");
    
    // Devuelve la última posición de un array
    ultimaPos = function (array) { return array[array.length - 1]; };

    document.querySelector("button.agregar_btn").addEventListener("click", agregarDato);

    actualizarElementos(listaIngresos, ingresos);
    actualizarElementos(listaGastos, gastos);  
}

// Comprueba que un dato sea válido
function comprobarDato(dato) {
    if (isNaN(dato)) alert('ERROR: Introduzca un valor númerico.');
    else if (dato < 0.01) alert(`ERROR: Introduzca un valor mayor o igual a ${(0.01).toLocaleString()}`);
    else return false;
    return true;
}

// Añade un ingreso o gasto a la cuenta bancaria
function agregarDato() {

    // Obtenemos el dinero que estamos introduciendo
    let dato = parseFloat(document.getElementById("valor").value);
    let descripcion = document.getElementById("descripcion").value;

    // Comprobamos que el dato introducido sea válido
    if (comprobarDato(dato)) return false;
    
    // Obtenemos la opcion elegida, gasto o ingreso
    let opcion = document.getElementById("tipo");
    let opcionElegida = opcion.options[opcion.selectedIndex];

    // Dependiendo de la opcion elegida, trabajamos con ingresos o con gastos
    let arrayDatos;
    if (opcionElegida.value == "ingreso") arrayDatos = [new Ingreso(dato, descripcion), ingresos, listaIngresos]; 
    else if (opcionElegida.value == "gasto") arrayDatos = [new Gasto(dato, descripcion), gastos, listaGastos];
    else return alert('Ha ocurrido un ERROR inesperado. Vuelva a intentarlo.');

    // Añade el tipo de Dato a su array correspondiente
    arrayDatos[1].push(arrayDatos[0]); // Ej.: ingresos.push(new Ingreso(dato, descripcion));

    // Mostramos el objeto creado en la última posición de su lista
    arrayDatos[2].innerHTML += ultimaPos(arrayDatos[1]); // Ej.: listaGastos.innerHTML += ultimaPos(gastos);
}

