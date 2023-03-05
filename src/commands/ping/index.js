import {SlashCommandBuilder} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('pong')
    .setDefaultMemberPermissions(0)
    .setDescription('ping command!')

export const actions =async (ctx) =>{
    ctx.reply('pong');
}