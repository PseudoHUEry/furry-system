const mongoose = require('mongoose')
const { Schema } = mongoose
const UserSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    primeiroNome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: String,
        required: true
    },
    createDate: {
        type: String,
        default: new Date().toISOString()
    }
})

module.exports = mongoose.model('User', UserSchema)