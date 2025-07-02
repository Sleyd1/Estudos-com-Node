const fs = require('fs');
const path = require('path');

console.log("diretório atual: " + path.dirname(__filename));


//criando um diretório
/*fs.mkdir(path.join(__dirname, '/test/test2'),(err) => {
    if (err){
        return console.error("Erro ao criar diretório:", err);
    }
    console.log("Diretório criado com sucesso!");
});*/


//criando um arquivo
/*
fs.writeFile(path.join(__dirname, 'test', 'arquivo.txt'), 'Conteúdo do arquivo', (err) => {
    if(err) {
        return console.log("Erro ao criar arquivo:", err);
    }
    console.log("Arquivo criado com sucesso!");

    //ler um arquivo
fs.readFile (path.join(__dirname, 'test', 'arquivo.txt'), 'utf8', (err, data) => {
    if(err) {
        return console.log("Erro ao ler arquivo:", err);
    }
    console.log("Conteúdo do arquivo:", data);
});


});*/


//adicionar conteúdo a um arquivo
/*
fs.appendFile(path.join(__dirname, 'test', 'arquivo.txt'), ', adicionando um novo texto',(err) => {
    if(err) {
        return console.log("Erro ao adicionar conteúdo ao arquivo:", err);
    }
    console.log("Conteúdo adicionado com sucesso!");
});*/

//ler um arquivo
fs.readFile (path.join(__dirname, 'test', 'arquivo.txt'), 'utf8', (err, data) => {
    if(err) {
        return console.log("Erro ao ler arquivo:", err);
    }
    console.log("Conteúdo do arquivo:", data);
});