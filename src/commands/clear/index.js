import {SlashCommandBuilder,PermissionFlagsBits} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('clear')
    .setDescription('清除訊息!')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addNumberOption(option => 
        option.setName('num')
        .setDescription('請輸入數量!')
        .setRequired(true)
        )

export const actions =async (ctx) =>{
    const number = ctx.options.getNumber('num');
    const amount = parseInt(number);
    await ctx.channel.bulkDelete(amount+1).catch(err => {
        ctx.channel.send(':x: 只能刪除14天以前的訊息!')});
    var del = await ctx.reply(`已刪除\`${amount}\`訊息!`);
    del =ctx.editReply('刪除完成!').then(msg=> msg.delete());
}