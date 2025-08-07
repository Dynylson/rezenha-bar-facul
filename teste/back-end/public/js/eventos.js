const eventosContainer = document.querySelector('#eventos');

function buscarEventos() {
    fetch('/events')
        .then(res => res.json())
        .then(data => {
            const eventos = data;

            eventos.forEach(evento => {
                const div = document.createElement('div');
                div.className = 'evento';
                div.innerHTML = `
                    <h2>${evento.name}</h2>
                    <img src="${evento.image}" alt=${evento.name}>
                `;
                eventosContainer.appendChild(div);
            });

            console.log('eventos', eventos);
        })
        .catch(err => {
            console.error('Erro ao buscar produtos:', err);
        });
}

buscarEventos();
