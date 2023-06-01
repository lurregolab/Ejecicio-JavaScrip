function limpiar(campo) {
    campo.innerHTML = "";
}

function oneQuestion() {
    let inputValue = document.getElementById("firstQuestion").value;
    let campo = document.getElementById("firQuestion")

    if (inputValue === "si") {
        campo.innerHTML = "Ciertamente";
    } else if (inputValue === "no") {
        campo.innerHTML = "No te creo";
    }
    else {
        limpiar(inputValue, campo);
    }
}


function twoQuestion() {
    let inputValue = document.getElementById("secondQuestion").value;
    let campo = document.getElementById("secQuestion")

    if (inputValue > 0 && inputValue % 2 === 0) {
        campo.innerHTML = inputValue + " número es divisible entre 2";
    }
    else if (inputValue > 0 && inputValue % 2 !== 0) {
        campo.innerHTML = inputValue + " número";
    }
    else {
        limpiar(inputValue, campo);
    }
}

function treeQuestion() {
    //let inputValue = document.getElementById("prompt-num").value;
    let n1 = parseInt(prompt("Escribe un número"));

    if (n1 > 0 && n1 % 2 === 0) {
        alert(`${n1} es un número par`);
    }
    else if (n1 > 0 && n1 % 2 !== 0) {
        alert(`${n1} es un número impar`);
    }
}

function fourQuestion() {
    let inputValue = parseInt(document.getElementById("fourQuestion").value);
    let campo = document.getElementById("forQuestion")

    if (inputValue > 0 && inputValue === 1000) {
        campo.innerHTML = " Ganaste un premio.";
    }
    else if (inputValue > 0 && inputValue !== 1000) {
        campo.innerHTML = "Lo sentimos, sigue participando.";
    }
    else {
        limpiar(inputValue, campo);
    }
}

function fiveQuestion() {
    let inputValue = parseInt(document.getElementById("fiveQuestion").value);
    let inputValueTow = parseInt(document.getElementById("fiveQuestiontow").value);
    let campo = document.getElementById("fivQuestion")

    if (inputValue < inputValueTow) {
        campo.innerHTML = "el numero menor es: " + inputValue;
    }
    else if (inputValue > inputValueTow) {
        campo.innerHTML = "el numero menor es: " + inputValueTow;
    }
    else if (inputValue === " " || inputValue === " ") {
        limpiar(campo);
    }
}

function sixQuestion() {
    let inputValue = parseInt(document.getElementById("sixQuestion").value);
    let inputValueTow = parseInt(document.getElementById("sixQuestiontow").value);
    let inputValueTree = parseInt(document.getElementById("sixQuestiontree").value);
    let campo = document.getElementById("siQuestion")

    if (inputValue < inputValueTow < inputValueTree) {
        if (inputValue < inputValueTow) {
            if (inputValue < inputValueTree) {
                campo.innerHTML = "el numero menor es: " + inputValue;
            } else { campo.innerHTML = "el numero menor es: " + inputValueTree; }
        }
        else if (inputValueTow < inputValueTree) {
            campo.innerHTML = "el numero menor es: " + inputValueTow;
        }
        else {
            campo.innerHTML = "el numero menor es: " + inputValueTree;
        }
    }
    else if (inputValue === " " || inputValue === " ") {
        limpiar(campo);
    }
}

function sevenQuestion() {
    let inputValue = document.getElementById("sevenQuestion").value.toLowerCase();
    let campo = document.getElementById("seveQuestion")
    if (inputValue.length > 0) {

        if (inputValue == "lunes") {
            campo.innerHTML = "inicio de semana";
        }
        else if (inputValue == "viernes") {
            campo.innerHTML = "fin de la semana";
        }
        else if (inputValue == "sabado") {
            campo.innerHTML = "ya podemos descanzar";
        }
        else if (inputValue == "domingo") {
            campo.innerHTML = "se acabo la semana";
        }
        else {
            campo.innerHTML = "no se encontro el dia";
        }
    }
    else {
        limpiar(campo);
    }

}

function eigthQuestion() {
    let inputValue = parseInt(document.getElementById("eigthQuestion").value.toLowerCase());
    let campo = document.getElementById("eigtQuestion")

    if (inputValue > 10) {
        campo.innerHTML = "ingresa un numero de 1 a 10";
    }
    else if (inputValue < 6) {
        campo.innerHTML = "reprobado";
    }
    else if (inputValue > 6 && inputValue < 8) {
        campo.innerHTML = "regular";
    }
    else if (inputValue === 9) {
        campo.innerHTML = "bien";
    }
    else if (inputValue === 10) {
        campo.innerHTML = "excelente";
    } else {
        limpiar(campo);
    }
}

function nineQuestion() {
    let topping = document.querySelector('input[id="topping"]:checked');
    let oreo = document.querySelector('input[id="oreo"]:checked');
    let KitKat = document.querySelector('input[id="KitKat"]:checked');
    let brownie = document.querySelector('input[id="brownie"]:checked');
    let otro = document.querySelector('input[id="otro"]:checked');
    let campo = document.getElementById("ninQuestion");
    let diferente = document.getElementById("diferente");

    if (topping) {
        campo.innerHTML = "cuesta 50 MXN";
        diferente.disabled = true;
        diferente.value = "";
    }
    if (oreo) {
        campo.innerHTML = "cuesta 10 MXN.";
        diferente.disabled = true;
        diferente.value = "";
    }
    if (KitKat) {
        campo.innerHTML = "cuesta 15 MXN.";
        diferente.disabled = true;
        diferente.value = "";
    }
    if (brownie) {
        campo.innerHTML = "cuesta 20 MXN.";
        diferente.disabled = true;
        diferente.value = "";
    }
    if (otro) {
        diferente.disabled = false;
        limpiar(campo);
        if (diferente.value.length > 0) {
            campo.innerHTML = "no tenemos este topping, lo sentimos, el precio del helado sin ningún topping cuesta 50 MXN";
        }
    }
}

let Course = document.querySelector('input[id="Course"]');
let Carrera = document.querySelector('input[id="Carrera"]');
let Master = document.querySelector('input[id="Master"]');
let descuento = document.querySelector('input[id="descuento"]');
let becaFacebook = document.querySelector('input[id="becaFacebook"]');
let becaGoogle = document.querySelector('input[id="becaGoogle"]');
let becaJesua = document.querySelector('input[id="becaJesua"]');
let campo = document.getElementById("teQuestion");

function tenQuestion() {
    if (Course.checked) {
        const valor = 4999
        campo.innerHTML = "El valor del curso es: $" + valor + "MXN";
        tenQuestiontwo();
        tenQuestiontree(valor);
    }
    if (Carrera.checked) {
        const valorCarrera = 3999
        campo.innerHTML = "El valor del curso es: $" + valorCarrera + "MXN";
        tenQuestiontwo();
        tenQuestiontree(valorCarrera);
    }
    if (Master.checked) {
        const valorMaster = 2999
        campo.innerHTML = "El valor del curso es: $" + valorMaster + "MXN";
        tenQuestiontwo();
        tenQuestiontree(valorMaster);
    }
}
function tenQuestiontwo() {
    if (descuento.checked) {
        becaFacebook.disabled = false;
        becaGoogle.disabled = false;
        becaJesua.disabled = false;
    } else {
        becaFacebook.checked = false;
        becaGoogle.checked = false;
        becaJesua.checked = false;
        becaFacebook.disabled = true;
        becaGoogle.disabled = true;
        becaJesua.disabled = true;
    }
}

function tenQuestiontree(valor) {
    console.log("++ " + valor)
    if (becaFacebook.checked) {
        becaJesua.checked = false;
        becaGoogle.checked = false;
        limpiar(campo);
        let porcentaje = valor * 0.20
        let total = valor - porcentaje
        campo.innerHTML = "El valor del curso con descuento es: $" + total + "MXN";
    }
    if (becaJesua.checked) {
        becaFacebook.checked = false;
        becaGoogle.checked = false;
        limpiar(campo);
        let porcentaje = valor * 0.50
        let total = valor - porcentaje
        campo.innerHTML = "El valor del curso con descuento es: $" + total + "MXN";
    }
    if (becaGoogle.checked) {
        becaJesua.checked = false;
        becaFacebook.checked = false;
        limpiar(campo);
        let porcentaje = valor * 0.15
        let total = valor - porcentaje
        campo.innerHTML = "El valor del curso con descuento es: $" + total + "MXN";
    }
}

function elevenQuestion() {
    let Coche = parseInt(document.getElementById("Coche").value);
    let moto = parseInt(document.getElementById("moto").value);
    let autobus = parseInt(document.getElementById("autobus").value);
    let totalCoche = document.getElementById("totalCoche");
    let totalMoto = document.getElementById("totalMoto");
    let totalAutobus = document.getElementById("totalAutobus");
    let total = Coche * 0.20 + 5;
    let totalmoto = moto * 0.10 + 5;
    let totalbus = autobus * 0.5 + 5;

    if (Coche > 0 && Coche <= 100) {
        totalCoche.innerHTML = "El total a pagar es: $" + total + "MXN";
    }
    if (Coche > 100) {
        totalCoche.innerHTML = "";
        let extraCoche = total + 5;
        totalCoche.innerHTML = "El total mas extra es: $" + extraCoche + "MXN";
    }
    if (moto > 0 && moto <= 100) {
        totalMoto.innerHTML = "El total a pagar es: $" + totalmoto + "MXN";
    }
    if (moto > 100) {
        totalMoto.innerHTML = "";
        let extramoto = totalmoto + 5;
        totalMoto.innerHTML = "El total mas extra es: $" + extramoto + "MXN";
    }
    if (autobus > 0) {
        totalAutobus.innerHTML = "El total a pagar es: $" + totalbus + "MXN";
    }
    if (autobus > 100) {
        totalAutobus.innerHTML = "";
        let extrabus = totalbus + 5;
        totalAutobus.innerHTML = "El total mas extra es: $" + extrabus + "MXN";
    }
}
