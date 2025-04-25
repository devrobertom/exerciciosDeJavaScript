var numeroEscolhido = Number(prompt("Digite um numero"))

function verficarNumero(numero){
    if (numero > 0){
        console.log("O numero é positivo")
    }
    else if( numero < 0){
        console.log("O numero é negativo")
    }
    else{
        console.log("O numero é 0")
    }
}

var resultado = verficarNumero(numeroEscolhido)