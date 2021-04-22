var inputNum1 = Number(prompt("Ingresa el primer número "));
var inputNum2 = Number(prompt("Ingresa el segundo número "));
var inputNum3 = Number(prompt("Ingresa el tercer número "));

if (inputNum1 > inputNum2 && inputNum1 > inputNum3) {
    document.write("El número mayor es " + inputNum1);
} else if (inputNum2 > inputNum3) {
    document.write("El número mayor es " + inputNum2);
} else {
    document.write("El número mayor es " + inputNum3);
}