let clicado = false;

function clicarBotao(){
    const span = document.getElementById("botao");
    clicado = !clicado;

    if(clicado){
        span.textContent = "Botão clicado"
    }
    else{
        span.textContent = "Botão desclicado"
    }
}