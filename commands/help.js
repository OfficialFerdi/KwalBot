const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Help Informatie")
    .setDescription("Krijg hulp commands.")
    .setColor("#00ff55")
    .addField(":shield: Hulp Commands", `>help - Hulp menu die je hebt geopent. :white_check_mark: \n >report - Report een speler. :white_check_mark: \n >regels - Bekijk de regels van kwalcraft. :white_check_mark:`)
    .addField(":scroll: Info commands", ">botinfo - Krijg informatie over de bot. :white_check_mark: \n >serverinfo - Krijg informatie over de server. :white_check_mark: \n >membercount - Bekijk hoeveel leden erin zitten. :white_check_mark:")
    .setFooter("Help | KwalCraft")
    .setTimestamp()

    message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help"
}