import {SlashCommandBuilder,PermissionFlagsBits} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('kick')
    .setDescription('踢出!')
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption(option => 
        option.setName('user')
        .setDescription('請選擇一位成員!')
        .setRequired(true)
        )

export const actions =async (ctx) =>{
    const member = ctx.options.getMember("user");
    member.kick();
    await ctx.reply(`${member} 已被踢出!`);
}