const formulario = document.querySelector("[data-formulario]");
const botaoLimpar = document.getElementById("botao_limpar");

function limparCampo(){
    document.querySelector("[data-nome]").value = "";
    document.querySelector("[data-valor]").value = "";
    document.querySelector("[data-imagem]").value = "";
}

botaoLimpar.addEventListener("click", evento => limparCampo(evento));
