const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.post('/students', studentController.criarAluno);
router.get('/students', studentController.listarAluno);
router.put('/students/:id', studentController.atualizarAluno);
router.delete('/students/:id', studentController.deletarAluno);

module.exports = router;