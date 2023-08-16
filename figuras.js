//Código del cuadrado
console.group("Cuadrados");
//Encapsulando códigos en constantes, con valores fijos:
/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perímetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perímetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm²");*/

//Encapsulando códigos en funciones, con valores dinámicos:
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();




//Código del triángulo
console.group("Triángulos");
//Encapsulando códigos en constantes, con valores fijos:
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm, "
    );

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es " + areaTriangulo + "cm²")*/


//Encapsulando códigos en funciones, con valores dinámicos:
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();



//Código del círculo
//Encapsulando códigos en constantes, con valores fijos:
console.group("Círculos");

/*Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

///Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es: " + diametroCirculo + "cm");*/

//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

/*Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + "cm²");*/


//Encapsulando códigos en funciones, con valores dinámicos:
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

/*Vamos a crear una función, nosotros queremos que cada vez que nuestros usuario le den click al botón de
"calcular el perimetro"(en HTML) queremos que se llame a una función que nosotros creamos en JavaScript
para poder reaccionar y lo mismo con "calcular el area".*/

//Aquí vamos a interactuar con HTML:
//CUADRADO:
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es: " + area + " cm²");
}

//TRIANGULO:
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueLado1 = parseInt(inputLado1.value);
    const valueLado2 = parseInt(inputLado2.value);
    const valueBase = parseInt(inputBase.value);

    const perimetroTri = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert("El perimetro del triangulo es: " + perimetroTri + " cm");
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueBase = parseInt(inputBase.value);
    const valueAltura = parseInt(inputAltura.value);

    const areaTri = areaTriangulo(valueBase, valueAltura);
    alert("El area del triangulo es: " + areaTri + " cm²");
}

//CUADRADO:
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametroCirc = diametroCirculo(value);
    alert("El diametro del circulo es: " + diametroCirc + " cm");
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetroCirc = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetroCirc + " cm");
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const areaCirc = areaCirculo(value);
    alert("El area del circulo es: " + areaCirc + " cm²");
}