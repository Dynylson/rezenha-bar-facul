let produtosArr = [];

const fotosCardapioContainer = document.getElementById('fotos-cardapio');
const searchInput = document.getElementById('search-input');

function renderProdutos(produtos) {
    fotosCardapioContainer.innerHTML = ''; // Limpa os produtos atuais

    produtos.forEach(produto => {
        const div = document.createElement('div');
        div.className = "caixa-foto";

        div.innerHTML = `
            <img src="${produto.image}" alt="">
            <p>${produto.name}</p>
            <p>R$${Number(produto.price).toFixed(2).replace('.', ',')}</p>
        `;

        fotosCardapioContainer.appendChild(div);
    });
}

function buscarProdutos() {
    fetch('/products')
        .then(res => res.json())
        .then(data => {
            produtosArr = data;
            renderProdutos(produtosArr); // Mostra todos inicialmente
        })
        .catch(err => {
            console.error('Erro ao buscar produtos:', err);
        });
}

searchInput.addEventListener('input', () => {
    const termo = searchInput.value.toLowerCase();

    const filtrados = produtosArr.filter(produto =>
        produto.name.toLowerCase().includes(termo)
    );

    renderProdutos(filtrados);
});

buscarProdutos();