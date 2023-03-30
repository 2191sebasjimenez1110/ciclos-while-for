let cero = prompt("ingrese 0 si desea ingresar un numero");
let a = 0;
let i = 0;
let num = 0;
    while (cero == "0") {
        num = parseFloat(prompt("ingrese un numero"));
        a=a+num
        cero = prompt("ingrese 0 si desea ingresar un numero");
        i++
    }

    document.write("el programa ha sido ejecutado con exito el promedio de los numeros ingresados es:" + a/i)
