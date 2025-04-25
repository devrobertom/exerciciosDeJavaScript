var danoPlayer = Number(prompt("Informe o dano ao personagem"))
var saude = 100

function personagemMorreu (dano, saude){
    if (dano >= saude) {
        console.log(1);
    }
    else{
        console.log(0);
    }
}

var resultado = personagemMorreu(danoPlayer, saude)