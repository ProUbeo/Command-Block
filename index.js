const Discord = require('discord.js');
 const bot = new Discord.Client();
 
 var prefix = ("/")
 var randnum = 0;
 var battle_ennemy = false;
 
 bot.on('ready', function() {
     bot.user.setUsername("Command-Block")
     bot.user.setPresence({ game: { name: 'éxécuter des commandes Minecraft'}, status: 'online'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 
 bot.on("guildMemberAdd", member => {
    
member.guild.channels.find("name", "entrer").send(`${member}, je te souhaite la bienvenue ! Je t'offre le pouvoir du rp (et pour l'utiliser... ah ! Tu connais pas ! Fait donc "rp!help" :3`)
    })
    bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "entrer").send(`${member} n'a plus le pouvoir du RP`)
    })
    
 

 bot.on('message', message => {

if(message.content.startsWith("<@479899618008891413>")){
    const embed = new Discord.RichEmbed()
    .setTitle(``)
    .setDescription(`Bonjour ${message.author} !\nJe suis un bot qui retranscrit des commandes de Minecraft mais sur discord ^^\npour avoir la liste de mes commandes, faites **/help** (comme dans minecraft XD)`)
    .setColor(0xcc0099)
    message.channel.send({embed})
}
if(message.content.startsWith("/help")){
    const embed = new Discord.RichEmbed()
    .setTitle(``)
    .setDescription(`ça arrive bientôt`)
    .setColor('RANDOM')
    message.channel.send({embed})
}
}
)
