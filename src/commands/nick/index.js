import {SlashCommandBuilder,PermissionFlagsBits} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('nick')
    .setDefaultMemberPermissions(PermissionFlagsBits.ChangeNickname)
    .setDescription('更改暱稱!')
    .addStringOption(option => option.setName('name').setDescription('請輸入您的暱稱!').setRequired(true))

export const actions =async (ctx) =>{
    const nickname = ctx.options.getString("name");
    ctx.guild.members.cache.get(`${ctx.user.id}`).setNickname(`${nickname}`);
    await ctx.reply(`<@${ctx.user.id}>`+'更改成功!');
}