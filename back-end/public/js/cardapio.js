const fotosCardapioContainer = document.querySelector('#fotos-cardapio');

function buscarProdutos() {
    fetch('/products')
        .then(res => res.json())
        .then(data => {
            const produtos = data;

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

            console.log('produtos', produtos);
        })
        .catch(err => {
            console.error('Erro ao buscar produtos:', err);
        });
}

buscarProdutos();
