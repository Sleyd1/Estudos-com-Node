# Estudos-com-Node
## O que é o Node.js
* Ambiente que permite a execução de codigo javascript fora de um navegador
* Utiliza a V8 Engine (mesmo motor utilizado pelo Google Chrome que compila JavaScript em código de máquina super rápido.)
* É utilizado para construir APIs (back-ends)

## Como Funciona o Node.js
* Possui apenas um núcleo (single threaded)
* Suporta varias operações simultãneas (non-blocking) Ele usa um Event Loop para lidar com várias tarefas sem travar.
  
## Modulos no Node.js
* Podemos criar nossos proprios módulos ( nosso arquivos) e importalos
* O Node.js vem com módulos pré-intalados (path, fs, http etc.)
* Para importar um modulo, utilizamos o common.js:
  ````javascript
  const path = require('path');
  const meuArquivo = require('./meu-arquivo.js');
  ````
  ### NPM - Node package manager
  * Podemos instalar módulos de terceiros utilizando o NPM.
  * Esses módulos são armazenados em uma pasta chamada "node_modules".
  * Um arquivo chamdo "package.json" lista todos os módulos que instalamos pelo NPM.
 
  ````node.js
  npm init //  inicia um novo projeto Node.js e cria o arquivo package.json, mas interativamente.
  npm init -y // cria o package.json necessário para instalar pacotes.
  npm install express // instala um pacote localmente
  npm -g install nodemon // instala um pacote globalmente
  npm list 'nome do modulo' // verifica se um modulo esterno está instalado

  ````

  ````node.js
  node -v //verifica a versao atual do node
  ````

| Situação                          | Comando Recomendado |
| --------------------------------- | ------------------- |
| Projeto rápido ou estudo/teste    | `npm init -y`       |
| Projeto mais sério/para o GitHub  | `npm init`          |
| Vai personalizar o `package.json` | `npm init`          |


## Pacotes utilizados

| 📦 Pacote    | Para quê?                               |
| ------------ | --------------------------------------- |
| **express**  | Criar servidor e rotas                  |
| **mongoose** | Conectar ao MongoDB e modelar dados     |
| **nodemon**  | Reiniciar o servidor automaticamente    |
| **dotenv**   | Usar variáveis de ambiente              |
| **morgan**   | Fazer logs das requisições              |
| **cors**     | Permitir requisições de outros domínios |


