# Estudos-com-Node
## O que é o Node.js
* Ambiente que permite a execução de codigo javascript fora de um navegador
* Utiliza a V8 Engine (mesmo motor utilizado pelo Google Chrome que compila JavaScript em código de máquina super rápido.)
* É utilizado para construir APIs (back-ends)

## Como Funciona o Node.js
* Possui apenas um núcleo (single threaded)
* suporta varias operações simultãneas (non-blocking) Ele usa um Event Loop para lidar com várias tarefas sem travar.
  
## modulos no Node.js
* podemos criar nossos proprios módulos ( nosso arquivos) e importalos
* O Node.js vem com módulos pré-intalados (path, fs, http etc.)
* para importar um modulo, utilizamos o common.js:
  ````javascript
  const path = require('path');
  const meuArquivo = require('./meu-arquivo.js');
  ````
  ### NPM - Node package manager
  * Podemos instalar módulos de terceiros utilizando o NPM.
  * Esses módulos são armazenados em uma pasta chamada "node_modules".
  * Um arquivo chamdo "package.json" lista todos os módulos que instalamos pelo NPM.
 
  ````javascript
  npm init // cria o package.json
  npm install express // instala um pacote localmente
  npm -g install nodemon // instala um pacote globalmente
  ````

  ````node.js
  node -v //verifica a versao atual do node
  ````

