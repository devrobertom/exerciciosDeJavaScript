var numEscolhido = Number(prompt("Escolha um numero"))

function verificacaoParOuImpar(numero){
    if (numero % 2) {
        console.log("O numero é impar")
    } 
    else {
        console.log("O numero é par")
    }   
}

var resultado = verificacaoParOuImpar(numEscolhido)