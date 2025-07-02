## 🔎 Diferença entre `mongodb` e `mongoose`

| Biblioteca     | O que é?                                                               | Quando usar?                                                    |
| -------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| **`mongodb`**  | Driver oficial do MongoDB para Node.js (baixo nível)                   | Quando você quer controle total                                 |
| **`mongoose`** | ODM (Object Data Modeling) – ferramenta de modelagem de dados em Mongo | Quando você quer trabalhar com schemas e validações automáticas |

---

## ✅ `npm install mongodb`

> **Driver oficial e direto**

### Características:

* Trabalha diretamente com comandos do MongoDB
* Mais flexível e rápido, mas exige mais código
* Não possui "schemas" prontos, você lida com documentos manualmente

### Exemplo com `mongodb`:

```js
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('meubanco');
    const colecao = db.collection('usuarios');
    return colecao.find().toArray();
  })
  .then(dados => console.log(dados))
  .catch(err => console.error(err));
```

---

## ✅ `npm install mongoose`

> **Biblioteca de alto nível (ODM) — muito usada em aplicações reais**

### Características:

* Permite definir **schemas** e modelos para seus documentos
* Valida automaticamente os dados
* Ideal para aplicações maiores com regras de negócio
* Facilita muito a leitura e escrita no banco

### Exemplo com `mongoose`:

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meubanco');

const Usuario = mongoose.model('Usuario', {
  nome: String,
  idade: Number
});

const novo = new Usuario({ nome: 'Alice', idade: 30 });
novo.save().then(() => console.log('Usuário salvo!'));
```

---

## 🧠 Qual escolher?

| Se você quer...                              | Use          |
| -------------------------------------------- | ------------ |
| Controle total e conexão direta com o banco  | `mongodb`    |
| Agilidade, schemas, validações e organização | `mongoose` ✅ |

> **Recomendado para projetos web e APIs REST modernas:** `mongoose`
> (por ser mais produtivo e facilitar manutenção de código)

---

## 📦 Comandos de instalação

```bash
# Driver oficial
npm install mongodb

# Biblioteca de alto nível com schemas
npm install mongoose
```
