document.getElementById('form-cadastro').addEventListener('submit', validarFormulario);
function validarFormulario(event) {
    event.preventDefault();
    // ID da page
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let curso = document.getElementById('curso').value;
    let periodo = document.getElementById('periodo').value;
    let turma = document.getElementById('turma').value;
    let turno = document.getElementById('turno').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;

    let valido = true;

    // validacao nome
    if (nome.length > 100 || nome.length == 0) {
        document.getElementById('nomeerr').innerText = 'Verifique o nome.';
        valido = false;  
    } else {
        document.getElementById('nomeerr').innerText = '';
    }

    // validacao email
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
        document.getElementById('emailerr').innerText = 'Por favor, insira um e-mail válido.';
        valido = false;  
    } else {
        document.getElementById('emailerr').innerText = '';
    }

    // validacao curso
    if (curso.length > 100 || curso.length == 0) {
        document.getElementById('cursoerr').innerText = 'Verifique o curso.';
        valido = false;  
    } else {
        document.getElementById('cursoerr').innerText = '';
    }

    // validacao periodo
    if (periodo.length > 20 || periodo.length == 0) {
        document.getElementById('periodoerr').innerText = 'Verifique o periodo.';
        valido = false;  
    } else {
        document.getElementById('periodoerr').innerText = '';
    }
    
    // validacao turma
    if (turma.length > 100 || turma.length == 0) {
        document.getElementById('turmaerr').innerText = 'Verifique a turma.';
        valido = false;  
    } else {
        document.getElementById('turmaerr').innerText = '';
    }

    // validacao turno
    if (turno.length > 10 || turno.length == 0) {
        document.getElementById('turnoerr').innerText = 'Verifique o turno.';
        valido = false;  
    } else {
        document.getElementById('turnoerr').innerText = '';
    }

    // validacao endereco
    if (endereco.length > 50 || endereco.length == 0) {
        document.getElementById('enderecoerr').innerText = 'Verifique o endereço.';
        valido = false;  
    } else {
        document.getElementById('enderecoerr').innerText = '';
    }

    // validacao telefone

    // Remover qualquer caractere não numérico antes de validar
    let celularLimpo = telefone.replace(/\D/g, '');

    // Expressão regular para o formato (xx) xxxxx-xxxx
    let regexCelular = /^(\d{2})(\d{5})(\d{4})$/;

    if (!regexCelular.test(celularLimpo)) {
        document.getElementById('telefoneerr').innerText = 'Por favor, insira um número de celular válido (formato: (xx) xxxxx-xxxx).';
        valido = false;  
    } else {
        document.getElementById('telefoneerr').innerText = '';
    }

    
    if (valido) {
        const formData = { nome, email, curso, periodo, turma, turno, endereco, telefone };

        fetch('http://localhost:3000/api/students', { // Altere a URL caso seja necessário
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(async response => {
            if (response.ok) {
                document.getElementById('message').textContent = 'Cadastro realizado com sucesso!';
                document.getElementById('message').style.color = 'green';
                document.getElementById('form-cadastro').reset();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao cadastrar.');
            }
        })
        .catch(error => {
            document.getElementById('message').textContent = `Erro: ${error.message}`;
            document.getElementById('message').style.color = 'red';
        });
    }


}

