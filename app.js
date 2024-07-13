function sortear(){
    //  Obriga o retorno do input ser INTEIRO com o parseInt
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateONumero = parseInt(document.getElementById("ate").value);
    let sorteados = [];

    // Enquanto não for sorteado a quantidade de numeros, gere numeros aleatorios
    while (sorteados.length < quantidade){
        let numeroAleatorio = obterNumeroAleatorio(doNumero, ateONumero);
    
        if (!sorteados.includes(numeroAleatorio)){
            sorteados.push(numeroAleatorio)
        }
    }

    // obtem o a div 
    let resultado = document.getElementById("resultado");
    // Altera o conteudo interno da tag Div
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
}

function reiniciar(){

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}