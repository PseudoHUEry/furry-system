require('dotenv/config');
const DiscordStarter = require('./config/DiscordStart');
const CommandRegistry = require('./config/CommandRegistry')
const startDatabase = require('./database/index');
(async () => {
    try {
        new CommandRegistry()
        new DiscordStarter()

        await Promise.all([
            startDatabase(),
        ])

    } catch (error) {
        console.log({
            data: new Date().toISOString(),
            message: error
        })
    }
})()