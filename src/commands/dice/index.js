import {SlashCommandBuilder,PermissionFlagsBits} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('dice')
    .setDescription('擲骰子!')
    .setDefaultMemberPermissions(0)
export const actions =async (ctx) =>{
    const rand = Math.floor(Math.random() * (6 - 1)) + 1
    await ctx.reply(`🎲 你得到${rand}點!`);
}