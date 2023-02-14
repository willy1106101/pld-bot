import {SlashCommandBuilder} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('ping')
    .setDefaultMemberPermissions()
    .setDescription('ping command!')

export const actions =async (ctx) =>{
    ctx.reply('pong');
}