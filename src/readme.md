# 🌐 Conectando ao MongoDB com Mongoose

Este trecho de código mostra como realizar a **conexão com o banco de dados MongoDB** utilizando a biblioteca `mongoose` no Node.js, com variáveis de ambiente para proteger credenciais.

---

## 📦 Código explicado

```js
// conectando ao banco de dados
const mongoose = require('mongoose');
````

* **`require('mongoose')`**: importa a biblioteca `mongoose`, que é uma ODM (Object Data Modeling) — uma ferramenta que facilita a interação com o MongoDB.
* Essa biblioteca permite trabalhar com banco de dados MongoDB usando objetos JavaScript e schemas validados.

---

```js
const connectTodabanco = async () => {
```

* Define uma **função assíncrona** chamada `connectTodabanco`, usada para conectar ao banco.
* A palavra-chave `async` permite usar `await` dentro da função, o que facilita o controle de promessas (Promises).


```js
try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@bancodedadosnod.ezvrlrb.mongodb.net/?retryWrites=true&w=majority&appName=bancoDeDadosNod`);
    console.log('✅ Conectado ao banco de dados com sucesso!');
} catch (err) {
    console.error('❌ Erro ao conectar ao banco de dados:', err.message);
}
```

#### O que cada parte faz:

* **`try { ... }`**: Tenta executar a conexão. Se funcionar, exibe a mensagem de sucesso.
* **`catch (err) { ... }`**: Captura qualquer erro que ocorrer durante a conexão e exibe uma mensagem de erro no console.
* **`process.env.MONGODB_USERNAME` e `process.env.MONGODB_PASSWORD`**: São variáveis de ambiente carregadas via arquivo `.env` para proteger suas credenciais do banco.

---

## 📦 Versão final corrigida

```js
const mongoose = require('mongoose');

const connectTodabanco = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@bancodedadosnod.ezvrlrb.mongodb.net/?retryWrites=true&w=majority&appName=bancoDeDadosNod`);
        console.log('✅ Conectado ao banco de dados com sucesso!');
    } catch (err) {
        console.error('❌ Erro ao conectar ao banco de dados:', err.message);
    }
};

module.exports = connectTodabanco;
```

---

## 🔐 Segurança

> Nunca exponha suas credenciais diretamente no código!
> Sempre use variáveis de ambiente com a biblioteca `dotenv`.

Exemplo de arquivo `.env`:

```env
MONGODB_USERNAME=seu_usuario
MONGODB_PASSWORD=sua_senha
```

E carregue com:

```js
require('dotenv').config();
```

---

## 📌 Conclusão

A conexão com MongoDB usando `mongoose` fica mais segura, legível e confiável com `async/await` + `try/catch`.
Evite usar `await` fora do `try`, pois isso impede o tratamento de falhas na conexão.

---
