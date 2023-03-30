let num1 = parseFloat(prompt("ingrese el numero que desea multiplicar"))
let num2 = parseFloat(prompt("ingrese el numero que desea multiplicar"))
let i = 1;
let acumulador = 0;

    while (i <= num1) {
        acumulador = acumulador + num2
        i++
    }

    console.log(acumulador);