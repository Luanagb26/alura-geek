import{ conectaApi } from "./conectaApi.js"

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, valor, imagem, id){
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-card", ""),
    card.innerHTML = `<img src="${imagem}" class="card__produto" alt="Imagem de produto">
                        <div class="card-container--info">
                            <p>${nome}</p>
                            <div class="card-container--value">
                                <p>$: ${valor}</p>
                            <button class="card__excluir" data-id=${id}>
                                <img src="assets/icon-trash.png" alt="Excluir">
                            </button>
                            </div>
                        </div>`
    return card;
}

async function listarCards() {
    try{
    const listaApi = await conectaApi.listaCards();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id)
    ));
    } catch(erro){
        console.error('Erro ao processar a resposta: ', erro);
    }
}

listarCards();