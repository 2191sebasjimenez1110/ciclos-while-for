let i = 1;
let a = 0;
let num = 0;
    while (i <= 10) {
        num = parseFloat(prompt("ingrese un numero"))
        a = a+num;
        i++
    }

let prom = a/10;
console.log("el promedio es: " + prom);