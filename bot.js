const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }
});

bot.login(process.env.token);

    static void UpdatePresence()
    {
        DiscordRichPresence discordPresence;
        memset(&discordPresence, 0, sizeof(discordPresence));
        discordPresence.state = "by nikkkushkaaafx";
        discordPresence.details = "Special for Nika Inc";
        discordPresence.startTimestamp = 0;
        discordPresence.endTimestamp = 0;
        Discord_UpdatePresence(&discordPresence);
    }
