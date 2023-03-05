import {SlashCommandBuilder,PermissionFlagsBits} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('role')
    .setDescription('編輯身分組!')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
    .addSubcommand(option => 
        option.setName('add')
            .setDescription('加入身分組!')
            .addUserOption(option => option.setName('user').setDescription('請選擇一位成員!'))
            .addRoleOption(option=> option.setName('role').setDescription('請選擇身分組!'))
        )
    .addSubcommand(option => 
        option.setName('remove')
            .setDescription('移除身分組!')
            .addUserOption(option => option.setName('user').setDescription('請選擇一位成員!'))
            .addRoleOption(option=> option.setName('role').setDescription('請選擇身分組!'))
        )

export const actions =async (ctx) =>{
    const user = ctx.options.getMember("user");
    const roles = ctx.options.getRole('role');
    if(ctx.options.getSubcommand() === 'add'){
    const addrole = ctx.guild.roles.cache.find(role => role.name === `${roles.name}`);
    await ctx.guild.members.cache.get(`${user.id}`).roles.add(addrole);
    await ctx.reply(`${user}`+"已加入您的身分組!");
    }
    if(ctx.options.getSubcommand() === 'remove'){
    const addrole = ctx.guild.roles.cache.find(role => role.name === `${roles.name}`);
    await ctx.guild.members.cache.get(`${user.id}`).roles.remove(addrole);
    await ctx.reply(`${user}`+"已移除您的身分組!");
    }
}