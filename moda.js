function calcularModa() {
    entradaModa = document.getElementById("inputModa");
    modaValue = entradaModa.value;

let arrayValor = Array.from(modaValue.split(","), Number);

const listaContador = {};

arrayValor.map(function(elemento){
    if (listaContador[elemento]) {
        listaContador[elemento] += 1;
    } else {
        listaContador[elemento] = 1;
    }
});

const listaArray = Object.entries(listaContador).sort(function(elementoA, elementoB){
    return elementoA[1] - elementoB[1];
});

const moda = listaArray[listaArray.length - 1];

const mostrarResultado = document.getElementById("resultadoModa");
mostrarResultado.innerText = "La moda es de: " + moda[0] + " que se repite " + moda[1] + " veces";
}