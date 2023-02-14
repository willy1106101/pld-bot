import {SlashCommandBuilder} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('add')
    .setDefaultMemberPermissions()
    .setDescription('加入身分組!')

export const actions =async (ctx) =>{
   const roleName = ctx.guild.roles.cache.find(role => role.name === "成員")
   await ctx.guild.members.cache.get(`${ctx.user.id}`).roles.add(roleName)
   await ctx.reply(`${ctx.user}`+'已加入身分組!');
}