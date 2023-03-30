let i = 0;
let a = 0;
let a2= 0;
let n = parseInt(prompt("ingrese un numero"));

while (i <= n) {
    a = i ** 2;
    a2 = a2 + a;
    i++
}

document.write("la suma de los cuadrados es: " + a2)