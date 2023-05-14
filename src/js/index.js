// pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// dar um jeito de pegar no JS o elemento correspondente ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    // adicionar a classe modo-escuro no body
    body.classList.toggle("modo-escuro");

    // verificar se o body ja tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        // remover a classe do modo-escuro do body
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    } else {
        // trocar a imagem do botao de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }
});