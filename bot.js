const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

 client.user.setGame(`لتحقيق العدالة اضغط رقم = 1`,'https://www.twitch.tv/MeeRcY')
 
 console.log(`Logged in as [ Pharaohs]`);

});

















         client.on('message', message => {
            if (message.content === '1') {
              message.channel.send('**وش مشكلتك !**');
         

            }
});












client.login(process.env.BOT_TOKEN);
