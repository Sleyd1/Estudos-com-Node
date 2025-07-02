
# 🌐 Criando um Servidor com Node.js (Módulo HTTP)

### 📦 1. Importando o módulo `http`

```js
const http = require('http');
````

* Importa o módulo nativo do Node.js que permite criar servidores HTTP.

---

### 📌 2. Definindo a porta

```js
const porta = 4500;
```

* Define a porta onde o servidor vai escutar as requisições.

---

### 🧠 3. Criando o servidor

```js
const servidor = http.createServer((req, res) => {
    // Rotas tratadas aqui
});
```

* `http.createServer()` cria um servidor.
* Recebe uma função callback com dois parâmetros:

  * `req` (requisição feita pelo cliente)
  * `res` (resposta enviada pelo servidor)

---

## 🔀 4. Rotas disponíveis

### ✅ `/home`

```js
if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Bem-vindo à página inicial!</h1>');
}
```

* Verifica se a URL requisitada é `/home`.
* Envia uma resposta HTML com status `200` (OK).
* O conteúdo HTML é enviado com codificação UTF-8.

---

### 👤 `/users`

```js
if (req.url === '/users') {
    const usuarios = [
        { nome: 'Alice', idade: 30 },
        { nome: 'Bob', idade: 25 },
        { nome: 'Charlie', idade: 35 }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(usuarios));
}
```

* Verifica se a URL requisitada é `/users`.
* Cria uma lista de usuários em formato de array de objetos.
* Converte para JSON com `JSON.stringify()` e envia como resposta.
* Define o tipo de conteúdo como `application/json`.

---

## 🚀 5. Inicializando o servidor

```js
servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
```

* O método `listen()` inicia o servidor na porta especificada.
* Um `console.log()` é executado para indicar que o servidor está ativo.

---

## 🧪 Testando

Execute o script no terminal:

```bash
node nome-do-arquivo.js
```

Acesse no navegador:

* `http://localhost:4500/home` → Resposta em HTML
* `http://localhost:4500/users` → Resposta em JSON

---

## 🧠 Extras

Você pode adicionar outras rotas ou uma resposta padrão para URLs desconhecidas, como:

```js
else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
}
```
