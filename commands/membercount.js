const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let countEmbed = new Discord.RichEmbed()
    .setDescription("Member Teller")
    .setColor("#ff6600")
    .addField("Leden in totaal", message.guild.memberCount)
    .addField("Leden", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
    .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
    .setFooter("Teller | KwalCraft")
    .setTimestamp()

    message.channel.send(countEmbed);
}

module.exports.help = {
  name: "membercount"
}