# 📖 O que é um Middleware?

Um **middleware** no Express é literalmente uma *função intermediária* que fica **no caminho entre a requisição do cliente e a resposta do servidor**.

Em outras palavras:
📦 Cliente → 🔄 Middleware(s) → 🎯 Rota/Handler → 📤 Resposta

Ele pode:
✅ Ler ou modificar a `req` (requisição)
✅ Ler ou modificar a `res` (resposta)
✅ Encerrar a resposta (`res.send()`)
✅ Ou passar o controle para o próximo middleware com `next()`

---

# 🔷 Sintaxe de um Middleware

✅ Um **middleware** é uma função JavaScript com esta assinatura:

```js
function meuMiddleware(req, res, next) { 
  console.log('Middleware foi chamado');
    next(); // chama o próximo na cadeia
}
```

👉 Essa função é que é o **middleware**.
Ela é quem recebe os três parâmetros (`req`, `res`, `next`) e é chamada pelo Express durante o ciclo de vida da requisição.

---

No Express:

```js
app.use(meuMiddleware);
```
Aqui você está dizendo ao Express:
“Para toda requisição que chegar, execute a função `meuMiddleware`”.


* `req` → a requisição do cliente.
* `res` → a resposta do servidor.
* `next()` → chama o próximo middleware ou rota.

---

# 📋 Tipos de Middleware

### 📌 1. Globais

Atuam em todas as rotas.

```js
app.use(express.json()); // analisa JSON no corpo da requisição
app.use(meuMiddleware);
```

### 📌 2. De Rota Específica

Executa só numa rota.

```js
app.get('/users', meuMiddleware, (req, res) => {
    res.send('Usuários');
});
```

### 📌 3. Internos do Express

Já vêm prontos:

* `express.json()` → converte corpo em JSON.
* `express.urlencoded()` → converte dados de formulário.
* `express.static()` → serve arquivos estáticos (imagens, CSS).

### 📌 4. De Terceiros

Bibliotecas externas:

* `morgan` → log de requisições.
* `cors` → habilitar CORS.
* `helmet` → segurança nos headers.

---

# 📝 Regras e Boas Práticas

✅ Sempre chame `next()` se o middleware não finalizar a resposta.
✅ Sempre use `app.use()` para aplicar a todos ou `app.METODO('/rota', middleware)` para uma rota específica.
✅ A ordem importa! Middleware registrado antes será executado antes.
✅ Nunca envie duas respostas (ex.: `res.send()` e depois `next()` sem necessidade).
✅ Se não chamar `next()` nem finalizar a resposta, a requisição fica presa (timeout).

---

# 📌 Quando usar?

🧰 Alguns casos clássicos:

* **Log**: registrar requisições no terminal.
* **Validação**: checar se o corpo da requisição tem os dados corretos.
* **Autenticação/autorização**: checar se o usuário tem permissão para acessar algo.
* **Tratamento de erros**: capturar e responder a erros da aplicação.
* **Parsing**: transformar o corpo em JSON.

---

# 🛠️ Exemplo completo

### 1️⃣ Middleware global

```js
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
```

### 2️⃣ Middleware de autenticação

```js
function autenticar(req, res, next) {
    if (req.headers.authorization === '12345') {
        next(); // autorizado
    } else {
        res.status(401).send('Não autorizado');
    }
}

app.get('/protegido', autenticar, (req, res) => {
    res.send('Você acessou a rota protegida!');
});
```

### 3️⃣ Middleware de tratamento de erros

```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});
```

---

# 🚀 Resumo Rápido

| 📌 Para quê?                | 📌 Exemplo                          |
| --------------------------- | ----------------------------------- |
| 📄 Ler/modificar requisição | Logs, autenticação, validação       |
| 📄 Ler/modificar resposta   | Adicionar headers, cookies          |
| 🧭 Encerrar a resposta      | Enviar `res.send()` ou `res.json()` |
| ⏩ Passar para próxima etapa | Chamar `next()`                     |

---

# 📌 Ordem dos middlewares

A ordem em que você declara os middlewares no código importa:

```js
app.use(middleware1);
app.use(middleware2);

app.get('/', (req, res) => { ... });
```

Primeiro roda `middleware1`, depois `middleware2`, depois a rota.

---

# 📝 Quando NÃO usar middleware?

❌ Quando você só precisa de um `if` simples na rota.
❌ Quando ele não será reutilizado (não faz sentido criar um middleware só para um `console.log()` numa única rota isolada).

---

# 🔷 Dicas

✅ Reutilize middlewares para lógica comum (autenticação, validação).
✅ Organize middlewares em arquivos separados para não poluir o `server.js`.
✅ Use middlewares externos para tarefas padronizadas (CORS, logs, segurança).

---

---

# 📄 `middlewares.js`

```js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Middleware Global: Log simples para cada requisição
function logBasico(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // continua para o próximo middleware ou rota
}

// Middleware de Autenticação
function autenticar(req, res, next) {
  const token = req.headers.authorization;

  if (token === '12345') {
    console.log('Usuário autenticado');
    next(); // autorizado
  } else {
    console.log('Tentativa de acesso sem autorização');
    res.status(401).json({ erro: 'Não autorizado' });
  }
}

// Middleware para Validar Dados no Body
function validarBodyUsuario(req, res, next) {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
  }

  next(); // válido, pode continuar
}

// Middleware de Tratamento de Erros
function tratadorDeErros(err, req, res, next) {
  console.error('Erro capturado pelo middleware:', err.stack);
  res.status(500).json({ erro: 'Algo deu errado no servidor' });
}

// Middleware externo: Morgan para logs detalhados
const logDetalhado = morgan('dev');

// Middleware externo: habilita CORS
const habilitarCors = cors();

module.exports = {
  logBasico,
  autenticar,
  validarBodyUsuario,
  tratadorDeErros,
  logDetalhado,
  habilitarCors,
};
```

---

# 📄 Como usar no seu servidor?

Exemplo no `server.js`:

```js
const express = require('express');
const app = express();
const middlewares = require('./middlewares');

// Habilita JSON no corpo
app.use(express.json());

// Middlewares Globais
app.use(middlewares.logBasico);
app.use(middlewares.logDetalhado);
app.use(middlewares.habilitarCors);

// Rota protegida
app.get('/protegido', middlewares.autenticar, (req, res) => {
  res.json({ mensagem: 'Você está autenticado!' });
});

// Rota para criar usuário (com validação)
app.post('/usuarios', middlewares.validarBodyUsuario, (req, res) => {
  const usuario = req.body;
  res.status(201).json({ mensagem: 'Usuário criado', usuario });
});

// Rota pública
app.get('/', (req, res) => {
  res.send('Bem-vindo à API!');
});

// Middleware de tratamento de erros (fica por último!)
app.use(middlewares.tratadorDeErros);

// Inicia servidor
const PORTA = 8080;
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
```

---

# 🚀 Dicas para estudar

📌 Todos os middlewares que não enviam resposta devem chamar `next()`.
📌 O tratamento de erros sempre vem **por último** no `app`.
📌 Você pode usar quantos middlewares quiser por rota.

---

# 🎯 Conclusão

✅ O middleware é SEMPRE uma função com `req, res, next`.
✅ Você PODE e DEVE criar os seus quando precisar.
✅ O `app.use()` ou `app.get()` apenas **registram** o middleware no servidor para ele ser executado.
✅ Se você não chamar `next()` nem finalizar a resposta (`res.send()`), a requisição fica travada.

