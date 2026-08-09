// =========================
// ELEMENTOS DO MODAL
// =========================

const modal = document.getElementById("modal");
const imagemPrincipal = document.getElementById("imagemPrincipal");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");
const miniaturas = document.querySelector(".miniaturas");


// =========================
// PRODUTOS
// =========================

const produtos = {

    escada: {
        nome: "Escada de Tauari",

        descricao:
            "Escada de canto feita com madeira de Tauari.",

        imagens: [
            "imagens/escada_tauri1.png",
            "imagens/escada_tauri2.png",
            "imagens/escada_tauri3.png"
        ]
    },


    deck: {
        nome: "Deck de Madeira",

        descricao:
            "Deck de madeira desenvolvido para áreas externas, trazendo beleza e conforto ao ambiente.",

        imagens: [
            "imagens/deck1.png",
            "imagens/deck2.png",
            "imagens/deck3.png"
        ]
    },


    piso: {
        nome: "Piso de Madeira",

        descricao:
            "Piso de madeira que une durabilidade e acabamento sofisticado para o ambiente.",

        imagens: [
            "imagens/piso1.png",
            "imagens/piso2.png",
            "imagens/piso3.png"
        ]
    }

};


// =========================
// ABRIR MODAL
// =========================

function abrirModal(produto) {

    const dados = produtos[produto];

    if (!dados) {
        return;
    }


    // Nome do produto
    modalTitulo.textContent = dados.nome;


    // Descrição
    modalDescricao.textContent = dados.descricao;


    // Primeira imagem
    imagemPrincipal.src = dados.imagens[0];

    imagemPrincipal.alt = dados.nome;


    // Limpa as miniaturas antigas
    miniaturas.innerHTML = "";


    // Cria as novas miniaturas
    dados.imagens.forEach((imagem, index) => {

        const miniatura = document.createElement("img");

        miniatura.src = imagem;

        miniatura.alt = `${dados.nome} - Foto ${index + 1}`;

        miniatura.onclick = function () {
            trocarImagem(this);
        };

        miniaturas.appendChild(miniatura);

    });


    // Mostra o modal
    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


// =========================
// FECHAR MODAL
// =========================

function fecharModal() {

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


// =========================
// MODAL DA EQUIPE
// =========================

const modalEquipe = document.getElementById("modalEquipe");

function abrirModalEquipe() {

    modalEquipe.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function fecharModalEquipe() {

    modalEquipe.style.display = "none";

    document.body.style.overflow = "auto";
}


// =========================
// TROCAR IMAGEM
// =========================

function trocarImagem(imagem) {

    imagemPrincipal.src = imagem.src;

    imagemPrincipal.alt = imagem.alt;
}


// =========================
// FECHAR CLICANDO FORA
// =========================

window.onclick = function (event) {

    if (event.target === modal) {

        fecharModal();

    }

    if (event.target === modalEquipe) {

        fecharModalEquipe();

    }

};
