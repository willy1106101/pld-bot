import {SlashCommandBuilder,PermissionFlagsBits,ActionRowBuilder,ButtonBuilder,ButtonStyle} from 'discord.js';
export const command = new SlashCommandBuilder()
    .setName('website')
    .setDescription('網站相關')
    .setDefaultMemberPermissions(0)
export const actions =async (ctx) =>{
    let website_url = 'https://willyhsu.rf.gd';
		const row = new ActionRowBuilder()
			.addComponents(
			new ButtonBuilder()
            .setURL(website_url)
            .setLabel('AQQER網站')
            .setStyle(ButtonStyle.Link),
			);
            let website_url2 = 'https://adminwillyhsu.rf.gd';
		const row2 = new ActionRowBuilder()
			.addComponents(
			new ButtonBuilder()
            .setURL(website_url2)
            .setLabel('AQQER檔案下載中心')
            .setStyle(ButtonStyle.Link),
			);
        await ctx.reply({content: '請點下方按鈕進入網站!\n',components: [row,row2] , ephemeral: true});
}