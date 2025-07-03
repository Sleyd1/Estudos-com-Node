//require("../modules/Path");

//const { Person } = require('./person.js');
const dotenv = require('dotenv');
const connectTodabanco = require('../src/connct.js');

dotenv.config();

connectTodabanco()

require('../modules/servidor/express.js');
//require('../modules/Fs.js');
//require('../modules/servidor/http.js');

//const person = new Person('Alice', 30);
//person.sayHello();

