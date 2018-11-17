const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

 client.user.setGame(`فديت الاخو الي يعطيني كريديت :heart: `,'https://www.twitch.tv/MeeRcY')
 
 console.log(`Logged in as [ Pharaohs]`);

});

















         client.on('message', message => {
            if (message.content === 'اتانلتلتا') {
              message.channel.send('لتنلن');
         

            }
});












client.login(process.env.BOT_TOKEN);
