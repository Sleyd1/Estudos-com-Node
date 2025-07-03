# 📖 Sintaxe Detalhada das Requests no Express

---

## 🔷 1. **GET**

### Sintaxe:

```js
app.get('/caminho', (req, res) => {
    res.status(codigo).send(conteudo);
});
```

### Explicação:

* `app.get()` → método do Express para lidar com requests HTTP do tipo **GET**.
* Primeiro argumento: `'/caminho'` → é a **rota**, a URL que o cliente acessa.
* Segundo argumento: função callback `(req, res)` chamada sempre que alguém faz um GET nessa rota.

  * `req` → (request) contém tudo que o cliente enviou (parâmetros, cabeçalhos, etc.).
  * `res` → (response) permite você enviar uma resposta ao cliente.

### Exemplo real:

```js
app.get('/home', (req, res) => {
    res.status(200).send('<h1>Bem-vindo à página inicial!</h1>');
});
```

* `res.status(200)` → define o código HTTP como 200 (OK).
* `.send()` → envia uma resposta ao cliente.

---

## 🔷 2. **GET com Parâmetro**

### Sintaxe:

```js
app.get('/rota/:param', (req, res) => {
    const valor = req.params.param;
    res.json({ valor });
});
```

### Explicação:

* `:param` → define um **parâmetro de rota dinâmico**.
* `req.params` → objeto com os parâmetros capturados.
* `.json()` → envia a resposta como JSON.

### Exemplo real:

```js
app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
});
```

---

## 🔷 3. **POST**

### Sintaxe:

```js
app.post('/caminho', (req, res) => {
    const dados = req.body;
    res.status(codigo).json(dados);
});
```

### Explicação:

* `app.post()` → lida com requests HTTP **POST**.
* Usado para criar algo novo.
* `req.body` → contém os dados enviados pelo cliente (precisa de `app.use(express.json())` para funcionar).
* `.json()` → envia resposta em JSON.

### Exemplo real:

```js
app.post('/users', async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
});
```

* `req.body` → é o objeto com os dados que você quer salvar no banco.

---

## 🔷 4. **PATCH**

### Sintaxe:

```js
app.patch('/caminho/:id', (req, res) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    res.json({ id, dadosAtualizados });
});
```

### Explicação:

* `app.patch()` → lida com requests HTTP **PATCH**.
* Usado para atualizar **parcialmente** um recurso existente.
* `req.params.id` → pega o ID do recurso.
* `req.body` → contém apenas os campos a serem modificados.

### Exemplo real:

```js
app.patch('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
});
```

* `findByIdAndUpdate()` → atualiza no banco.
* `{ new: true }` → faz o Mongoose devolver o documento atualizado.

---

## 🔷 5. **DELETE**

### Sintaxe:

```js
app.delete('/caminho/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `Recurso ${id} deletado` });
});
```

### Explicação:

* `app.delete()` → lida com requests HTTP **DELETE**.
* Usado para excluir um recurso existente.
* `req.params.id` → o ID do recurso a ser deletado.
* `.json()` → envia confirmação.

### Exemplo real:

```js
app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    await UserModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
});
```

---

# 📦 Componentes de uma Request no Express

### `req` → request (entrada do cliente)

* `.params` → parâmetros de rota.
* `.query` → parâmetros de consulta (após `?` na URL).
* `.body` → dados enviados no corpo (POST/PATCH/PUT).
* `.headers` → cabeçalhos HTTP enviados pelo cliente.

### `res` → response (resposta do servidor)

* `.status(código)` → define o código HTTP de resposta.
* `.send(conteúdo)` → envia texto/HTML.
* `.json(objeto)` → envia JSON.
* `.end()` → finaliza sem enviar nada.

---

# 📝 Resumo Visual da Sintaxe

| Método     | Sintaxe Básica                | Dados de Entrada          | Dados de Saída         |
| ---------- | ----------------------------- | ------------------------- | ---------------------- |
| **GET**    | `app.get('/rota', fn)`        | `req.params`, `req.query` | `.send()` ou `.json()` |
| **POST**   | `app.post('/rota', fn)`       | `req.body`                | `.json()`              |
| **PATCH**  | `app.patch('/rota/:id', fn)`  | `req.params`, `req.body`  | `.json()`              |
| **DELETE** | `app.delete('/rota/:id', fn)` | `req.params`              | `.json()`              |

---

# 📋 Exemplo Completo com Tudo:

```js
app.post('/exemplo/:id', (req, res) => {
    console.log(req.params.id);    // parâmetro de rota
    console.log(req.query);       // query string
    console.log(req.body);        // corpo enviado
    console.log(req.headers);     // cabeçalhos HTTP

    res.status(201).json({ mensagem: 'Tudo certo!' });
});
```

---

### 🚀 Dica prática:

Sempre siga esta sequência para qualquer rota:
1️⃣ Escolha o método (`get`, `post`, `patch`, `delete`)
2️⃣ Escreva a URL (com ou sem parâmetros)
3️⃣ Receba `req` e `res` no callback
4️⃣ Leia os dados de `req` se necessário
5️⃣ Envie a resposta usando `res`

---
