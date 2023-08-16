// Declaramos la variable lista con el array
let lista = [];

// Creo la función que añadirá items al array y los irá mostrando en pantalla para que el usuario tenga una secuencia.
function buttonInputSalario(){
    const numero = Number(document.getElementById("InputSalario"). value);
    const anadirNumero = lista.push(numero);
    const resultado = document.getElementById("listaUser");
    resultado.innerText = `Tu lista actual tiene los siguientes números: ${lista}. Si están bien, presiona el botón "Calcular Promedio".`;
}

function buttonPromedio(){
    const valorAcumulado = (acumulador, nuevoElemento) => acumulador + nuevoElemento;
    const promedioLista = lista.reduce(valorAcumulado) / lista.length;
    const resultado = document.getElementById("ResultadoPromedio");
    resultado.innerText = "El promedio es" + promedioLista;
}