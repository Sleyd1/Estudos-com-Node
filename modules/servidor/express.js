//criando um servidor com Express
const express = require('express');
const UserModel = require('../../src/models/Users-models.js');


const app = express();

app.get('/home', (req, res) => {
    res.status(200).send('<h1>Bem-vindo à página inicial!</h1>');
});
// Definindo a porta do servidor
const porta = 8080;

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});



app.get('/users', (req,res) => {
    const usuarios = [
        { nome: 'Alice', idade: 30 },
        { nome: 'Bob', idade: 25 },
        { nome: 'Charlie', idade: 35 }
    ]

    res.status(200).json(usuarios);
});

// Rota para criar um novo usuário
app.post('/users', (req, res) => {
   const user = UserModel.create(req.body);

   res.status(201).jason(user);
});