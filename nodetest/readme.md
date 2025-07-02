# O que é o nodemon?
nodemon é uma ferramenta usada em projetos Node.js que reinicia automaticamente o servidor sempre que você faz alterações nos arquivos do projeto.

 ### Sem o nodemon:
Você teria que parar e iniciar o servidor manualmente toda vez que fizesse uma mudança no código.

### Com o nodemon:
Você faz a mudança, salva, e o servidor reinicia sozinho. Muito útil para desenvolvimento!

## ``npm install nodemon  --save-dev``
Esse comando instala o nodemon no seu projeto usando o npm (Node Package Manager).

### `` --save-dev``
Este trecho significa que o nodemon será instalado como dependência de desenvolvimento.

Ou seja:

--save-dev → essa dependência só é necessária durante o desenvolvimento do projeto (não em produção).

Ele será listado em package.json dentro da seção "devDependencies".