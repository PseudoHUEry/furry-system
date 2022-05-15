const mongoose = require('mongoose')
const { Schema } = mongoose
const StatusSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    clientStatus: {
        mobile: {
            type: String,
        },
        desktop: {
            type: String,
        }
    },
    createDate: {
        type: String,
        default: new Date().toISOString()
    }
})

module.exports = mongoose.model('Status', StatusSchema)