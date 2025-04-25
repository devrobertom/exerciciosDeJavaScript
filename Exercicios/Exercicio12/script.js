var numeros = [];

while (numeros.length < 10){
    numeros.push(Number(prompt("Digite um numero")));
}

console.log(numeros.sort(function(a,b){
    return a - b
}));