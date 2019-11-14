const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("644611730198233146")
setInterval(function() {
channel.send(`mo oooooooooooooooooooo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);