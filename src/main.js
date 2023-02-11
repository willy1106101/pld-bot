import { Client,Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
config();
import vueInit from '@/core/vue';
vueInit();
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

client.on(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
  client.user.setActivity('機器人製作中...');
});


client.login(process.env.TOKEN);