const Status = require('../database/models/Status')
module.exports = async ({ userId, status, clientStatus }) => {
    try {
        const result = await Status.create({
            userId,
            status,
            clientStatus
        })
        return result
    } catch (e) {
        console.log({
            data: new Date().toISOString(),
            error: e
        })
    }
}