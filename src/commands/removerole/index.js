import {SlashCommandBuilder} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('remove')
    .setDefaultMemberPermissions(0)
    .setDescription('移除身分組!')

export const actions =async (ctx) =>{
   const roleName = ctx.guild.roles.cache.find(role => role.name === "成員")
   await ctx.guild.members.cache.get(`${ctx.user.id}`).roles.remove(roleName)
   await ctx.reply(`${ctx.user}`+'已移除身分組!');
}