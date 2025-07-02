//criando um servidor HTTP

const http = require('http');

// Definindo a porta do servidor
// A porta 4500 é uma escolha arbitrária, você pode escolher outra porta se desejar
const porta = 4500;

// Iniciando o servidor na porta especificada
const servidor = http.createServer((req, res) => {
    if (req.url === '/home') {
        // res.writeHead() serve para definir o status e os cabeçalhos da resposta HTTP.
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
       // res.end() encerra a resposta e envia o conteúdo para o cliente.
        res.end('<h1>Bem-vindo à página inicial!</h1>');
    }

    if (req.url === '/users') {
        const usuarios = [
            { nome: 'Alice', idade: 30 },
            { nome: 'Bob', idade: 25 },
            { nome: 'Charlie', idade: 35 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(usuarios));
    }
});

// Iniciando o servidor e escutando na porta especificada
servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});



