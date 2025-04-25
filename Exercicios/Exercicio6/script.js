var posicaoTela = Number(prompt("Informe uma posição"))

function limitaPosicao(posicao) {
    if (posicao < 0) {
        console.log("Posição inválida, reajustado...");
        return 0;
    }
    else if (posicao > 100) {
        console.log("Posição inválida, reajustado...");
        return 100;
    }
    else {
        return posicao;
    }
}

posicaoTela = limitaPosicao(posicaoTela);
console.log("Posição final:", posicaoTela);
