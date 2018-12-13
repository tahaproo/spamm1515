const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "15";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "510522025148678154"; // ايدي السررفر
var channel = "510522025148678156";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , CrazyWorld , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
 client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("513116523951423513");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To Crazy World`), 4000)        
}
});
client.login(process.env.BOT_TOKEN);
