import { Events } from "discord.js"
import { useAppStore } from "@/store/app"
export const event={
    name: Events.InteractionCreate
}
export const actions = async(interaction)=>{
    if(!interaction.isChatInputCommand())return
    const appStore = useAppStore()
    const actions = appStore.commandsActionMap.get(interaction.commandName)
    await actions(interaction)
}