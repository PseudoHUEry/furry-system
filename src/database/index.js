const mongoose = require('mongoose')

const startDatabase = async () => {
    const acess = process.env.NODE_ENV === 'staging' ? process.env.BD_PRD : "mongodb://localhost:27017/furrybot"
    try {
        mongoose.connect(acess, { useNewUrlParser: true, useUnifiedTopology: true }).then(x => {
            console.log('Database connected: ' + acess)
        });
        const db = mongoose.connection;
        return db;
    } catch (error) {
        console.log(error);
    }
}
module.exports = startDatabase