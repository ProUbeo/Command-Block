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
    .setColor('RANDOM')
    message.channel.send({embed})
}
if(message.content.startsWith("/help")){
    const embed = new Discord.RichEmbed()
    .setTitle(``)
    .setDescription(`/tp **mention de la personne a laquelle tu veux te téléporter**`)
    .setColor('RANDOM')
    message.channel.send({embed})
}

  if(message.content.startsWith(prefix + "tp")){
            if(message.mentions.users.first()){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} se téléporte a ${message.mentions.users.first()}`)
            .setColor('RANDOM')
            
            message.channel.send({embed})
        }else{
            const embed = new Discord.RichEmbed()
             let args = message.content.split(" ").slice(1)
             let thingToEcho = args.join(" ")
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} se téléporte en ${thingToEcho}`)
            .setColor('RANDOM')
            
            message.channel.send({embed})
        }}
}
)
