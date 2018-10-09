const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Informatie")
    .setDescription("Informatie over de bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Naam", bot.user.username)
    .addField("Gemaakt Op", bot.user.createdAt)
    .addField("Bot Developer", "OfficieelFerdi#5109")
    .setFooter("Botinfo | KwalCraft")
    .setTimestamp();

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}