//criando um servidor com Express
const express = require('express');
const UserModel = require('../../src/models/Users-models.js');


const app = express();
app.use(express.json()); // Middleware para analisar JSON no corpo das requisições

app.get('/home', (req, res) => {
    res.status(200).send('<h1>Bem-vindo à página inicial!</h1>');
});
// Definindo a porta do servidor
const porta = 8080;

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});


// Esta rota retorna todos os usuários cadastrados no banco de dados
app.get('/users',async (req,res) => {

    try{
        const usuarios = await UserModel.find({});
        res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).send(error.message);
    }
    
});



app.get('/users/:id', async (req, res) => {
   try{
        const id = req.params.id;
        const user = await UserModel.findById(id);
        res.status(200).json(user);
   }catch (error) {
       res.status(500).send(error.message);
   }
})

//request para atualizar uma
app.patch('/users/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);
   }catch (error) {
       res.status(500).send(error.message);
   }
})

//


// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
    try{
   const user = await UserModel.create(req.body);

    res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
        
    }
  
});


/// Rota para deletar um usuário
app.delete('/users/:id', async (req, res) => {
   try {
 const id = req.params.id;
 const user = await UserModel.findByIdAndDelete(id);
 res.status(200).json({ message: 'Usuário deletado com sucesso!' });
   }catch (error) {
       res.status(500).send(error.message);
   } 
});