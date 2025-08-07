const btnAgendar = document.querySelector('.btn-agendar');

const nomeForm = document.querySelector('#nome');
const dataForm = document.querySelector('#data');
const horaForm = document.querySelector('#hora');

btnAgendar.addEventListener('click', function(e) {
    e.preventDefault();

    fetch('/scheduling', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customer_name: nomeForm.value,
            date: dataForm.value,
            time: horaForm.value
        })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            alert('Agendamento realizado com sucesso!');
            return response.json();
        })
        .then(data => {
            console.log('Agendamento criado com sucesso:', data);
        })
        .catch(error => {
            alert('Erro ao agendar. Tente novamente.');
            console.error('Erro ao agendar:', error);
    });
});