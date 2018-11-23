const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

                    

const prefix = '';

client.on('ready', () => {

  
    console.log(`Logged in as [ Pharaohs]`);

});

















const adminprefix = "";
const developers = ['514114378384015372'];

console.log("mohab");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
})


client.on('message', message => {//// حقوق @! -,ᴹᴼᴴᴬᴮ ~#8556 
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**:white_check_mark:  تم تغيير البلاينق الى   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "باي")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**:white_check_mark:  تَم تغيير الواتشينق الى   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**:white_check_mark:  تَم تغيير الليسينينق الى   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/paaaaaartly");
      message.channel.send(`**:white_check_mark:  تم تغييرك حالتك بالتويتش الى   ${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**:white_check_mark:  جاري تغيير الأسم لـ ..${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**:white_check_mark:  جاري تغيير الأفتار... :** `);
}
});































client.on('message', message => {
    if (message.content === 'بووم') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(`**كسمك يا ابن المتناكة عل كسمكم الي هيا الشرموطة بتاعتي نايكم اانا يسعودين يمتانيك وربي مصر نايككم يبتوع الكبسة انتم احنا نايكنكم مش احنا طعمية انتم كبسة كسمكم يا ولاد المرة المنيوكة خاضعنكم احنا يا ولادا العرص نايكنكم سبام يامتانيك احلا نيكة يا ولاد العرص روحو ومتجوش تاني تمام المعلم عليكم @! -,ᴹᴼᴴᴬᴮ ~#8556 @Mohamed.₄₅#8682 @here 
$%@#%^%%&#^%@^$#$%&$%^#@#%&%%@#%&&&&&&&&%$^*#^%#^$#$^$&%*$*%^$%$^#%%%&%^**%^%(%(%*(^&%&%$&%^*%%^*%&#$^#^$*%#^&**`)
              .then(m => {
                count++;
              })
              
            }
          }
    });








client.login(process.env.BOT_TOKEN);
