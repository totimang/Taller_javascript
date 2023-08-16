//funciones hellpers, son las funciones que no son parte de la lógica de negocio del análisis que vamos a hacer, pero las necesitamos para nuestros cálculos, también se pueden llamar "Utils":
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
        });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

//Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana general:
//me va a devolver todos los salarios de c/personita:
const salariosArg = argentina.map(
    function(personita){
        return personita.salary;
    }
);

//me va a devolver todos los salarios de c/personita, pero de menor a mayor:
const salariosArgSorted = salariosArg.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

//Mediana del top 10%
const spliceStart = parseInt((salariosArgSorted.length * 90) / 100);
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Arg = medianaSalarios(salariosArgTop10);

console.log({
    medianaGeneralArg,
    medianaTop10Arg,
});