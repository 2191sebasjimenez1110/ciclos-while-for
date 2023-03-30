let i = 1;
let acum = 0 ;
let num = 0;

    while (i <= 5) {
    num = parseFloat(prompt("ingrese un numero"));
    acum = acum+num;
   
    i++
    }
    console.log("la suma es: " + acum);