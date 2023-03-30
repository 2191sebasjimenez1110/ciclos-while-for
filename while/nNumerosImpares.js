let n = parseInt(prompt("ingrese un numero"))
let i = 0;
let acum = 0;
    while (i <= n) {
        if (i %2 != 0) {
            document.write(i + " es impar" + "<br>");
            acum++
        }
        i++;      
}  


document.write("la cantidad de numeros impar es:" + acum)