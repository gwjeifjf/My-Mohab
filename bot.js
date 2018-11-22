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































const adminprefix = "";
const devs = ['','514114378384015372'];
client.on('message', message => {
  var argresult = message.content.split(`).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'play')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(${argresult} تم تغيير بلاينق البوت إلى )
} else 
  if (message.content.startsWith(adminprefix + 'name')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(${argresult} : تم تغيير أسم البوت إلى`)
return message.reply("لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . ");


}
});






const adminprefix = "";
const devs = ['514114378384015372'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk")
    message.channel.sendMessage(`**:white_check_mark: تم تغير الستريمنق إلى: ${argresult}**`)
}
});





























client.login(process.env.BOT_TOKEN);
