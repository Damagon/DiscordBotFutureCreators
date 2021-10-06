const TicTacToe = require('discord-tictactoe');
const Discord = require('discord.js');
const client = new Discord.Client();

new TicTacToe({ language: 'en', command: '!ttt' })
  .attach(client);

client.login('ODU2NDcxMjExMjM5NTM4Njg4.YNBg-Q.zsPTXbDIRQ1Na1JeNNHhq7-c7y0');