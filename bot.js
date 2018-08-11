const Discord = require(‘discord.js’);

const client = new Discord.Client();

var prefix = ‘!’

client.on(‘message’, message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + ‘help’)) {
        message.channel.sendMessage(‘Привет я БОТ!’);
     }
});

client.login(‘NDc3ODg4NDI3NDY0MDY1MDQ0.DlDrQA.sWiD1iSn-ZabcaJ5Mpe_arDk0aM’);
