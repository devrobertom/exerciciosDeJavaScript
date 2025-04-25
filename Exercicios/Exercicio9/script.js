var num1 = Number(prompt("Digite um numero"))
var num2 = Number(prompt("Digite outro numero"))
var num3 = Number(prompt("Digite outro numero"))

var maior = 0

function maiorNumero (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        maior = num1
    }
    else if (num2 > num1 && num2 > num3){
        maior = num2
    }
    else{
        maior = num3
    }

    console.log(maior)
}

var resultado = maiorNumero(num1, num2, num3)