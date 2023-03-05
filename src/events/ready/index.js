import { Events } from "discord.js"

export const event ={
    once:true,
    name: Events.ClientReady
}

export const actions = (c)=>{
    console.log(`Ready! Logged in as ${c.user.tag}`);
    const activities = [
        "https://willyhsu.rf.gd/",
        "https://willyhsu.rf.gd/",
        "https://adminwillyhsu.rf.gd/index.php",
        `Stay in ${c.guilds.cache.size} guild!`
      ];
    setInterval(() =>{
          // generate random number between 1 and list length.
          const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
          const newActivity = activities[randomIndex];
          c.user.setActivity(newActivity);
          //console.log(randomIndex);
        }, 10000);
}