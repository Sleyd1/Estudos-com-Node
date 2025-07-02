const path = require('path');

console.log("diretório atual: " + path.dirname(__filename));
console.log("nome do arquivo: " + path.basename(__filename));
//"__filename" modulo que retorna o nome completo do arquivo atual

//"__dirname" modulo que retorna o caminho completo do diretório atual

// Extensão do arquivo
console.log("extensão do arquivo: " + path.extname(__filename));

// criar objeto path
const pathObject = path.parse(__filename);
console.log("objeto path: ", pathObject);

// juntar caminhos
const newPath = path.join(__dirname, 'test');
console.log("novo caminho: " + newPath);

