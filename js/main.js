let num1;
do {
    num1 = parseInt(prompt("Ingrese el valor de temperatura"));

    if (isNaN(num1)) {
        alert("Ingrese valor correcto");
    }
} while (isNaN(num1));

let opTrans;

do {
    opTrans = prompt("Seleccione la transformacion de escalas que desea usar. \n\n 1. Celsius a Farenheit \n 2. Farenheit a Celsius \n 3. Kelvin a Celsius \n 4. Celsius a Kelvin \n 5. Farenheit a Kelvin \n 6. Kelvin a Farenheit \n");

    if (isNaN(opTrans) || opTrans < 1 || opTrans > 6) {
        alert("Ingrese una opción válida");
    }
} while (isNaN(opTrans) || opTrans < 1 || opTrans > 6);

function operacion(temp, number) {
    switch (number) {
        case "1":
            return (temp * 1.8) + 32;
        case "2":
            return (temp - 32) / 1.8;
        case "3":
            return temp - 273.15;
        case "4":
            return temp + 273.15;
        case "5":
            return 5 / 9 * (temp - 32) + 273.15;
        case "6":
            return 1.8 * (temp - 273.15) + 32;
        default:
            return "Operacion invalida";
    }
};

function escala(dato) {
    if (dato === "1" || dato === "6") {
        dato = "Farenheit";
    } else if (dato === "2" || dato === "3") {
        dato = "Celcius";
    } else {
        dato = "Kelvin";
    }
    return dato;
};

let opText = escala(opTrans);
let num2 = operacion(num1, opTrans);
alert(num2.toFixed(2) + "° " + opText);

let opcion = parseInt(prompt("¿Convertir otro valor? \n\n 1. Si \n 2. No "));
again(opcion);

function again(option) {
    if (option === 1) {
        let num1;
        do {
            num1 = parseInt(prompt("Ingrese el valor de temperatura"));

            if (isNaN(num1)) {
                alert("Ingrese un valor correcto");
            }
        } while (isNaN(num1));

        let opTrans = prompt("Seleccione la transformación de escalas que desea usar. \n\n 1. Celsius a Fahrenheit \n 2. Fahrenheit a Celsius \n 3. Kelvin a Celsius \n 4. Celsius a Kelvin \n 5. Fahrenheit a Kelvin \n 6. Kelvin a Fahrenheit \n");

        let opText = escala(opTrans);
        let num2 = operacion(num1, opTrans);
        alert(num2.toFixed(2) + "° " + opText);

        let opcion = parseInt(prompt("¿Convertir otro valor? \n\n 1. Si \n 2. No "));
        again(parseInt(opcion));

    } else if (option === 2) {
        alert("Terminamos");

    } else {
        alert("Ingrese valor correcto");
        let num1;
        do {
            num1 = parseInt(prompt("Ingrese el valor de temperatura"));

            if (isNaN(num1)) {
                alert("Ingrese un valor correcto");
            }
        } while (isNaN(num1));

        let opTrans = prompt("Seleccione la transformación de escalas que desea usar. \n\n 1. Celsius a Fahrenheit \n 2. Fahrenheit a Celsius \n 3. Kelvin a Celsius \n 4. Celsius a Kelvin \n 5. Fahrenheit a Kelvin \n 6. Kelvin a Fahrenheit \n");

        let opText = escala(opTrans);
        let num2 = operacion(num1, opTrans);
        alert(num2.toFixed(2) + "° " + opText);

        let opcion = parseInt(prompt("¿Convertir otro valor? \n\n 1. Si \n 2. No "));
        again(parseInt(opcion));
    }
};

console.log("Gracias");

