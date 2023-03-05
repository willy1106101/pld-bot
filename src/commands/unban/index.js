import {SlashCommandBuilder,PermissionFlagsBits} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('unban')
    .setDescription('解除封鎖!')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(option => 
        option.setName('user')
        .setDescription('請選擇一位成員!')
        .setRequired(true)
        )

export const actions =async (ctx) =>{
    const user = ctx.options.getUser("user");
    await ctx.guild.members.unban(user);
    await ctx.reply(`${user} 已解除封鎖!`);
}