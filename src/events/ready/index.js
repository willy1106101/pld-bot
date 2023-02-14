import { Events } from "discord.js"

export const event ={
    once:true,
    name: Events.ClientReady
}

export const actions = (c)=>{
    console.log(`Ready! Logged in as ${c.user.tag}`);
}