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
  if (cmd === `${prefix}правила`){
    message.channel.send("Привет! Я автоматизированный бот помощник! Сейчас я расскажу тебе правила данного DISCORD сервера.");
    message.channel.send("```Правила:```");
  }
});

bot.login(process.env.token);

bot.on("message",(message) => {
	if (message.content == "хуй"){
		message.reply("аккуратнее молодой человек!");
	}
});

