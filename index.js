const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Kan de commands niet vinden.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} is geladen!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online op ${bot.guilds.size} servers!`);
  bot.user.setActivity(">help | KwalBot", {type: "PLAYING"});

});

var swearWords = ["kut", "kanker", "idioot", "je kanker moeder", "lelijkerd", "tering", "je moeder", "tering idioot", "je bent lelijk", "stupid", "domme kut", "je bent dom", "fucking", "fucking idioot", "krijg de tering", "sex", "zuigen"];

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if (!message.member.hasPermission("ADMINISTRATOR")) {

    var msg = message.content.toLowerCase();

    for (var i = 0; i < swearWords.length; i++) {

        if (msg.includes(swearWords[i])) {

            message.delete();

            return message.reply("Let op je taalgebruik.").then(msg => msg.delete(3000));

           }
        }
    }

});

bot.login(botconfig.token);