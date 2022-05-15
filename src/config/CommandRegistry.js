const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const token = process.env.TOKEN_BOT
const commands = require('../interface/router/routerInteractions')

class CommandRegistry {
    commands
    constructor() {
        this.commands = commands.map(x => {
            return new SlashCommandBuilder().setName(x.name).setDescription(x.description)
        })
        this.init()
    }

    async init() {
        const newCommands = this.commands.map(command => command.toJSON());

        const rest = new REST({ version: '9' }).setToken(token);

        rest.put(Routes.applicationGuildCommands('938615056965451906','745054148726095933'), { body: newCommands })
            .then(() => console.log('Comandos de aplicação registrados com sucesso.'))
            .catch(console.error);
    }

}


module.exports = CommandRegistry