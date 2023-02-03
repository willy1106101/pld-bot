import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
    const activities = [
        "https://willyhsu.rf.gd/",
        "https://willyhsu.rf.gd/",
        "https://willyhsu.rf.gd/files/index.php",
        `Stay in ${client.guilds.cache.size} guild!`
      ];
    setInterval(() =>{
          // generate random number between 1 and list length.
          const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
          const newActivity = activities[randomIndex];
          client.user.setActivity(newActivity);
        }, 10000);
});






client.login(process.env.TOKEN);