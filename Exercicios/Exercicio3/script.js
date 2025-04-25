var num1 = Number(prompt("Digite o 1 numero:"));
var num2 = Number(prompt("Digite o 2 numero:"));
var num3 = Number(prompt("Digite o 3 numero:"));

var soma = num1 + num2 + num3
var media = soma / 3
console.log(`Os numeros sao ${num1}, ${num2} e ${num3}`)
console.log("A media é " + media.toFixed(2));
