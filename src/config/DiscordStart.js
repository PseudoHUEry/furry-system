
const { Client } = require('discord.js');
const intents = require('./auth/Intents');
const router = require('../interface/router/routerInteractions')
const presenceListener = require('../use-cases/PresenceListener')
const token = process.env.TOKEN_BOT

class DiscordStarter {
    client
    commands
    constructor() {
        this.client = new Client({ intents: [...intents] });
        this.commands = {}
        this.init()
    }
    init() {
        this.start()
        router.forEach(x => {
            this.commands[x.name] = x.controller
        })
        this.client.login(token);
    }
    start() {
        this.client.once('ready', () => {
            this.client.user.setActivity('PAI TÁ ON!')
            console.log(`${this.client.user.username}`)
        });
        this.handling()
    }
    handling() {
        this.client.on('interactionCreate', async (interaction) => {
            if (!interaction.isCommand()) return;
            const { commandName } = interaction
            await this.commands[commandName](interaction)
        })
        this.client.on('presenceUpdate', async(listen) => {
            const entity = await presenceListener(listen)
            console.log(entity)
        })
    }
}

module.exports = DiscordStarter