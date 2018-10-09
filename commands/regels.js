const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let regelsEmbed = new Discord.RichEmbed()
    .setTitle(":beginner: Regels van kwalcraft :beginner:")
    .setDescription("Bekijk hier de regels van kwalcraft. Waarschuwing: hou je niet aan de regels, komen er consequenties.")
    .setColor("#990000")
    .addField("De regels van kwalcraft", `\n
    ->Hacken is verboden.
    ->Schelden tegen staff en tegen andere is verboden.
    ->Gebruik geen voicechanger.
    ->Je discrimineert anderen niet.
    ->18+ dingen bij fotokanaal en videokanaal kan leiden naar een perm ban.
    ->Reclame maken in de minecraft server en hier is verboden.
    ->Gebruik de chatkanalen en de spraakkanalen waarvoor ze zijn.
    ->Spammen is niet toegestaan.
    ->Wij Hebben een Nederlandse discord server en minecraft server, dus wij praten Nederlands.
    ->Privé reclame maken is niet toegestaan.`)
    .setFooter("Regels | KwalCraft")
    .setTimestamp()

    message.channel.send(regelsEmbed);
}

module.exports.help = {
  name: "regels"
}