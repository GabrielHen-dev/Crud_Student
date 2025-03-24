document.getElementById('atualizarEstudante').addEventListener('click', function () {
    const id = document.getElementById('idEstudante').value.trim(); // ID do estudante a ser atualizado

    if (!id) {
        alert('Informe o ID do estudante para atualizar.');
        return;
    }

    // Pegando os novos valores do formulário
    const dadosAtualizados = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        curso: document.getElementById('curso').value.trim(),
        periodo: document.getElementById('periodo').value.trim(),
        turma: document.getElementById('turma').value.trim(),
        turno: document.getElementById('turno').value.trim(),
        endereco: document.getElementById('endereco').value.trim(),
        telefone: document.getElementById('telefone').value.trim()
    };

    // Verifica se algum campo obrigatório está vazio
    for (let key in dadosAtualizados) {
        if (!dadosAtualizados[key]) {
            alert(`O campo ${key} deve ser preenchido.`);
            return;
        }
    }

    atualizarEstudante(id, dadosAtualizados);
});

// Função para atualizar os dados do estudante na API
function atualizarEstudante(id, dadosAtualizados) {
    fetch(`http://localhost:3000/api/students/${id}`, { // Altere a URL caso necessário
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosAtualizados)
    })
    .then(async response => {
        if (response.ok) {
            console.log("Dados recebidos:", data);
            document.getElementById('message').textContent = 'Cadastro atualizado com sucesso!';
            document.getElementById('message').style.color = 'blue';
            document.getElementById('form-cadastro').reset();
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao atualizar.');
        }
    })
    .catch(error => {
        document.getElementById('message').textContent = `Erro: ${error.message}`;
        document.getElementById('message').style.color = 'red';
    });
}
