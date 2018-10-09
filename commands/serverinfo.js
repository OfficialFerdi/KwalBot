const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
    .setTitle("Server Informatie")
    .setDescription("Info over de discord server")
    .setThumbnail(sicon)
    .setColor("#339933")
    .addField("Server naam", message.guild.name)
    .addField("Server is gemaakt op", message.guild.createdAt)
    .addField("Je bent de server joined op", message.member.joinedAt)
    .addField("Server Eigenaar(s)", "OfficieelFerdi#5109 \n GamepartyYes#0110")
    .setFooter("Serverinfo | KwalCraft")
    .setTimestamp();

    message.channel.send(serverEmbed);
}

module.exports.help = {
  name: "serverinfo"
}