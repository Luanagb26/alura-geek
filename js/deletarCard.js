import { conectaApi } from "./conectaApi.js";

const botaoId = document.querySelector("[data-lista]");

async function deletarCard(evento) {
    if (evento.target.classList.contains("card__excluir")) {
    const cardId = evento.target.closest("card__excluir")?.dataset.id || evento.target.dataset.id;

    if (!cardId) {
        console.error("Nenhum ID encontrado no botão de exclusão.");
        return;
    }

    await conectaApi.deletaCard(cardId);

    evento.target.closest(".card").remove();
    }
    location.reload();
}

botaoId.addEventListener("click", evento => deletarCard(evento));