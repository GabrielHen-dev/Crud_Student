const Students = require('../models/students');

const criarAluno = async (data) => {
  try {
    const students = new Students(data);
    await students.save();
    return students;
  } catch (error) {
    throw new Error('Erro ao criar aluno: ' + error.message);
  }
};

const listarAluno = async () => {
  try {
    return await Students.find().sort(
        { createdAt: -1 });
  } catch (error) {
    throw new Error('Erro ao listar pacientes: ' + error.message);
  }
};

const buscarAlunoPorId = async (id) => {
  try {
    return await Students.findById(id);
  } catch (error) {
    throw new Error('Erro ao buscar aluno: ' + error.message);
  }
};

const atualizarAluno = async (id, dados) => {
  try {
    return await Students.findByIdAndUpdate(id, dados, { new: true });
  } catch (error) {
    throw new Error('Erro ao atualizar aluno: ' + error.message);
  }
};

const deletarAluno = async (id) => {
  try {
    return await Students.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Erro ao deletar aluno: ' + error.message);
  }
};

module.exports = { criarAluno, listarAluno, buscarAlunoPorId, atualizarAluno, deletarAluno };