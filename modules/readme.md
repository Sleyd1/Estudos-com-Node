# 📁 Manipulação de Arquivos e Diretórios com Node.js

### `fs` (File System)

Permite interagir com o sistema de arquivos: criar, ler, atualizar e excluir arquivos/diretórios.

Importação:

```js
const fs = require('fs');
````

### `path`

Fornece utilitários para trabalhar com caminhos de arquivos/diretórios de forma multiplataforma (Windows, Linux, macOS).

Importação:

```js
const path = require('path');
```

---

## ✏️ Escrita de Arquivo: `fs.writeFile`

Cria (ou sobrescreve) um arquivo com o conteúdo especificado.

```js
fs.writeFile('teste.txt', 'Olá, mundo!', (err) => {
  if (err) throw err;
  console.log('Arquivo criado com sucesso!');
});
```

### 🔍 Explicação:

* `'teste.txt'`: nome do arquivo que será criado ou sobrescrito.
* `'Olá, mundo!'`: conteúdo a ser escrito no arquivo.
* `(err) => { ... }`: função de callback executada após a tentativa. Se ocorrer um erro, ele será lançado.

---

## 📝 Adicionar Conteúdo: `fs.appendFile`

Adiciona conteúdo ao final de um arquivo existente. Se o arquivo não existir, ele será criado.

```js
fs.appendFile('teste.txt', '\nNova linha!', (err) => {
  if (err) throw err;
  console.log('Conteúdo adicionado com sucesso!');
});
```

---

## 📖 Leitura de Arquivo: `fs.readFile`

Lê o conteúdo de um arquivo.

```js
fs.readFile('teste.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Conteúdo do arquivo:', data);
});
```

### 🔍 Explicação:

* `'utf8'`: define a codificação de leitura. Sem isso, os dados vêm como `Buffer`.
* `data`: contém o conteúdo do arquivo.

---

## 📁 Criação de Diretório: `fs.mkdir`

Cria uma nova pasta.

```js
fs.mkdir('minhaPasta', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Pasta criada com sucesso!');
});
```

### 🔍 Explicação:

* `'minhaPasta'`: nome da pasta.
* `{ recursive: true }`: garante que pastas intermediárias sejam criadas, se necessário.

---

## 🔍 Utilizando o Módulo `path`

O `path` nos ajuda a montar e analisar caminhos de arquivos de forma segura e multiplataforma.

### `path.join`

Une partes de caminhos e normaliza automaticamente as barras (`/` ou `\`).

```js
const caminhoCompleto = path.join(__dirname, 'minhaPasta', 'teste.txt');
console.log(caminhoCompleto);
```

### 🔍 Explicação:

* `__dirname`: variável especial do Node.js que retorna o diretório atual do arquivo.
* `'minhaPasta'`, `'teste.txt'`: partes do caminho que serão unidas.

---

### `path.parse`

Analisa um caminho de arquivo e retorna um objeto com várias propriedades úteis.

```js
const caminho = path.parse(__filename);
console.log(caminho);
```

### 🔍 Explicação:

* `__filename`: variável especial que retorna o caminho completo do arquivo atual.
* `path.parse(...)` retorna um objeto com:

  * `root`: diretório raiz.
  * `dir`: diretório até o arquivo.
  * `base`: nome do arquivo com extensão.
  * `ext`: extensão do arquivo.
  * `name`: nome do arquivo sem a extensão.

---

### `path.basename`

Retorna apenas o nome do arquivo (com extensão).

```js
const nomeArquivo = path.basename(__filename);
console.log(nomeArquivo); // ex: arquivo.js
```

---

### `path.dirname`

Retorna apenas o diretório onde o arquivo está localizado.

```js
const diretorio = path.dirname(__filename);
console.log(diretorio);
```

---

## ✅ Exemplo Completo

```js
const fs = require('fs');
const path = require('path');

const pasta = path.join(__dirname, 'arquivos');
const arquivo = path.join(pasta, 'exemplo.txt');

// Criar pasta
fs.mkdir(pasta, { recursive: true }, (err) => {
  if (err) throw err;

  // Criar arquivo com conteúdo
  fs.writeFile(arquivo, 'Primeira linha\n', (err) => {
    if (err) throw err;

    // Adicionar conteúdo
    fs.appendFile(arquivo, 'Segunda linha\n', (err) => {
      if (err) throw err;

      // Ler conteúdo
      fs.readFile(arquivo, 'utf8', (err, data) => {
        if (err) throw err;

        console.log('Conteúdo do arquivo:\n', data);
      });
    });
  });
});
```

---

