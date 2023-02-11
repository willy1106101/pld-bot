import {SlashCommandBuilder} from 'discord.js';
const ping = new SlashCommandBuilder()
    .setName('ping')
    .setDefaultMemberPermissions()
    .setDescription('ping command!')

export const action =async (ctx) =>{
    ctx.reply('pong');
}