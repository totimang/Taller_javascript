//Solución #2: legibilidad, error first y muerte al switch

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];



function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    if (!coupons.includes(couponValue)){
        alert("El cupón " + couponValue + " no es válido");
    } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
    } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
    } else if (couponValue ==="es_un_secreto") {
        descuento = 25;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

/*La función array.includes() -LINEA 27- nos permite validar si un elemento ha sido almacenado en el array.
Vamos a usar esta función para ejecutar un error si el cupón de los usuarios es inválido (no fue guardado en el array coupons)*/
