function sortear(){
    //  Obriga o retorno do input ser INTEIRO com o parseInt
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateONumero = parseInt(document.getElementById("ate").value);
    let sorteados = [];

    // Enquanto não for sorteado a quantidade de números, gere números aleatórios
    while (sorteados.length < quantidade){
        let numeroAleatorio = obterNumeroAleatorio(doNumero, ateONumero);
    
        if (!sorteados.includes(numeroAleatorio)){
            sorteados.push(numeroAleatorio);
        }
    }

    // obtem o a div 
    let resultado = document.getElementById("resultado");
    // Altera o conteudo interno da tag Div
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

    //Altera o status dos botões
    alterarStatusBotao('btn-reiniciar');
    alterarStatusBotao('btn-sortear');
}

function alterarStatusBotao(idBotao){
    let botao = document.getElementById(idBotao);
    
    //Valida se o botao tiver uma classe especifica
    if (botao.classList.contains("container__botao-desabilitado")){
        botao.classList.replace("container__botao-desabilitado", "container__botao");
    } else {
        botao.classList.replace("container__botao", "container__botao-desabilitado");
    }
}

function reiniciar(){

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}