const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {


 
 console.log(`Logged in as [ Pharaohs]`);

});































client.on('ready',async () => {
   let GUILDID = '469026947372941333'; //
  let CHANNELID = '469026947372941337'; //



  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type :: ${channel.type}, It must be Voice.`);
    }
  }
});



































client.on('message', message => {
    if (message.content ===  'boom') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(`كسمك يا ابن المتناكة نايكك انت وعيلتك `)
              .then(m => {
                count++;
              })
              
            }
          }
    });


















client.login(process.env.BOT_TOKEN);
