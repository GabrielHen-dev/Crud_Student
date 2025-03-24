document.getElementById('buscarEstudantes').addEventListener('click', function() {
    fetch('http://localhost:3000/api/students', { method: 'GET' })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const lista = document.getElementById('listaEstudantes');
        lista.innerHTML = ''; // Limpa a lista antes de exibir os novos dados

        data.forEach(estudante => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>ID:</strong> ${estudante._id} <br>
                <strong>Nome:</strong> ${estudante.nome} <br>
                <strong>Email:</strong> ${estudante.email ? estudante.email : 'Não informado'} <br>
                <strong>Curso:</strong> ${estudante.curso ? estudante.curso : 'Não informado'} <br>
                <strong>Período:</strong> ${estudante.periodo ? estudante.periodo : 'Não informado'} <br>
                <strong>Turma:</strong> ${estudante.turma ? estudante.turma : 'Não informado'} <br>
                <strong>Turno:</strong> ${estudante.turno ? estudante.turno : 'Não informado'} <br>
                <strong>Endereço:</strong> ${estudante.endereco ? estudante.endereco : 'Não informado'} <br>
                <strong>Telefone:</strong> ${estudante.telefone ? estudante.telefone : 'Não informado'} <br>`;
            lista.appendChild(li);
        });
    })
    .catch(error => message('Erro na requisição:', error));
});


 
