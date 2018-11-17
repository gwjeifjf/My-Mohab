const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

 client.user.setGame(`يوم الجمعة انشالله`,'https://www.twitch.tv/MeeRcY')
 
 console.log(`Logged in as [ Pharaohs]`);

});

















         client.on('message', message => {
            if (message.content === '') {
              message.channel.send('');
         

            }
});












client.login(process.env.BOT_TOKEN);
