const studentService = require('../services/studentService');

const criarAluno = async (req, res) => {
  try {
    const { nome, email, curso, periodo, turma, turno, endereco, telefone } = req.body;

    if (!nome || !email || !curso || !periodo || !turma || !turno || !endereco || !telefone) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const student = await studentService.criarAluno(req.body);
    res.status(201).json({ message: 'Aluno cadastrado com sucesso.' });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listarAluno = async (req, res) => {
  try {
    const student = await studentService.listarAluno();
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const atualizarAluno = async (req, res) => {
  try {
    const { id } = req.params; 
    const dadosAtualizados = req.body; 

    // Verifica se o aluno existe
    const aluno = await studentService.buscarAlunoPorId(id);
    if (!aluno) {
      return res.status(404).json({ message: "Aluno não encontrado." });
    }

    // Atualiza os dados do aluno no banco
    await studentService.atualizarAluno(id, dadosAtualizados);
    res.json({ message: "Aluno atualizado com sucesso." });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletarAluno = async (req, res) => {
  try {
    const { id } = req.params; // Pega o ID da URL

    // Verifica se o aluno existe 
    const aluno = await studentService.buscarAlunoPorId(id);
    if (!aluno) {
      return res.status(404).json({ message: "Aluno não encontrado." });
    }

    // Deleta o aluno no banco
    await studentService.deletarAluno(id);
    res.json({ message: "Aluno removido com sucesso." });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { criarAluno, listarAluno, atualizarAluno, deletarAluno};