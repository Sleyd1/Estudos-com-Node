//conectando ao banco de dados

const mongoose = require('mongoose');

const connectTodabanco = async () => {
    
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@bancodedadosnod.ezvrlrb.mongodb.net/?retryWrites=true&w=majority&appName=bancoDeDadosNod`);
        console.log('✅ Conectado ao banco de dados com sucesso!');
    } catch (err) {
        console.error('❌ Erro ao conectar ao banco de dados:', err.message);
    }


}

module.exports = connectTodabanco;