import { Client,Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
config();
import vueInit from '@/core/vue'
import {useAppStore} from '@/store/app'
import { loadCommands,loadEvents } from '@/core/loader'
vueInit()
loadCommands()
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]})

const appStore =useAppStore()
appStore.client=client
loadEvents()
client.login(process.env.TOKEN)