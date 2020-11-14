/*
Dev By Blacklight
Don't skid, faggot
*/
import * as Discord from "discord.js"
import * as readline from 'readline'

let a = 1

let rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout
})

let client = new Discord.Client()

rl.question('Entrez le token : ', (token) => {

    client.login(token)

})

function bite(){

    rl.question('Entrez le script a executer : ', (script) => {

        try{
            const evalee = eval(script)
     } catch(e) {console.log(e)}
    })
    setTimeout(bite, 10000)
}

client.once('ready', () => {

    bite()

})