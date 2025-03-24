document.getElementById('excluirEstudante').addEventListener('click', async function () {
    const id = document.getElementById('idEstudante').value;

    if (!id) {
        alert('Informe o ID do estudante para deletar.');
        return;
    }

    if (!confirm('Tem certeza que deseja excluir este estudante?')) return;

    fetch(`http://localhost:3000/api/students/${id}`, { // Altere a URL caso seja necessário
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(async response => {
        if (response.ok) {
            alert('Funcionou')
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao cadastrar.');
        }
    })
    .catch(error => {
        document.getElementById('message').textContent = `Erro: ${error.message}`;
        document.getElementById('message').style.color = 'red';
    });
});
