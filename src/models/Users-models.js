const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    
    },
    lastname: {
        type: String,
        required: true,
    
    },
    email: {
        type: String,
        required: true,
    
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 15,
    
    }

});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
// Exportando o modelo para ser usado em outras partes da aplicação