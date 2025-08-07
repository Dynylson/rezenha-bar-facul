const maisPedidosContainer = document.querySelector('#fotos-pedidos');

function buscarMaisPedidos() {
    fetch('/products')
        .then(res => res.json())
        .then(data => {
            const produtos = data;

            produtos.forEach(produto => {
                const a = document.createElement('a');
                a.href = "cadapio.html";
                a.className = "caixa-foto";

                a.innerHTML = `
                    <img src="${produto.image}" alt="">
                    <p>${produto.name}</p>
                    <p>R$${Number(produto.price).toFixed(2).replace('.', ',')}</p>
                `;

                maisPedidosContainer.appendChild(a);
            });
        })
        .catch(err => {
            console.error('Erro ao buscar produtos:', err);
        });
}

buscarMaisPedidos();
