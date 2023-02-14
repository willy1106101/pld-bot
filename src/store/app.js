import { defineStore } from "pinia";

export const useAppStore = defineStore('app',{
    state:() =>({
        client:null,
        commmandsActionMap:null,
    }),
    getters:{
       
    },
    actions:{},
})