const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./src/routes/studentRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://GabrielH:ghco2006@cluster0.qt5mz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    
  serverSelectionTimeoutMS: 5000, // Tempo máximo de espera para conectar ao servidor
  socketTimeoutMS: 45000, // Tempo máximo de espera para operações
})

.then(() => console.log("Conectado ao MongoDB com sucesso!"))
.catch((err) => console.log("Conectado ao MongoDB com sucesso!", err));

app.get('/health', (req, res) => {
    res.status(200).json({ status: 200, message: 'Servidor ativo!' });
  });
  
  app.use('/api', studentRoutes);
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });