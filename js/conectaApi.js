async function listaCards() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaCard(nome, valor, imagem) {
    try{
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
        
    });

    console.error("Erro ao criar o card:", erro);

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
    
    } catch(erro){
        console.error("Erro ao criar o card:", erro);
    }
}

async function deletaCard(id) {
    
    try{
        const conexao = await fetch(`http://localhost:3000/produtos/${id}`,{
        method: "DELETE"
        });

        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch(erro){
        console.error("Erro ao excluir o card:", erro);
    }

}

export const conectaApi = {
    listaCards,
    criaCard,
    deletaCard
}