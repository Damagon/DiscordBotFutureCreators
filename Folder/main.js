token = 'ODU2NDcxMjExMjM5NTM4Njg4.YNBg-Q.zsPTXbDIRQ1Na1JeNNHhq7-c7y0'
const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Robert is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 

    if(command === 'fc'){
        client.commands.get('fc').execute(message, args);
    } 

    if(command === 'welcome'){
        client.commands.get('welcome').execute(message, args);
    } 

    if(command === 'rps'){
        client.commands.get('rps').run(client, message, args);
    } 

    if(command === 'ttt'){
        client.commands.get('ttt').run(client, message, args);
    } 
    if(command === 'clear'){
      client.commands.get('clear').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message,args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message,args);
    }
});


/* MUSIC BOT CODE */
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
const ytdl = require("ytdl-core");
 
const queue = new Map();
 
client.once("ready", () => {
  console.log("Ready!");
});
 
client.once("reconnecting", () => {
  console.log("Reconnecting!");
});
 
client.once("disconnect", () => {
  console.log("Disconnect!");
});
 
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  const server = queue.get(message.guild.id);
 
  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, server);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, server);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, server);
    return;
  } else if (message.content.startsWith(`${prefix}pause`)) {
    pause(message, server);
    return;
  } else if (message.content.startsWith(`${prefix}resume`)) {
    resume(message, server);
    return;
  } else {
    message.channel.send("You need to enter a valid command!");
  }
});
 
async function execute(message, server) {
    const args = message.content.split(" ");
  
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to play music!"
      );
    
    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
     };
  
    if (!server) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
  
      queue.set(message.guild.id, queueContruct);
  
      queueContruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      server.songs.push(song);
      return message.channel.send(`${song.title} has been added to the queue!`);
    }
  }
  
  function play(guild, song) {
    const server = queue.get(guild.id);
    if (!song) {
      server.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
  
    const dispatcher = server.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        server.songs.shift();
        play(guild, server.songs[0]);
      })
      .on("error", error => console.error(error));
    server.textChannel.send(`Start playing: **${song.title}**`);
  }
  
  function pause(message, server) {
    server.connection.dispatcher.pause();
    server.textChannel.send('Music Paused! To continue, use command "!resume"');
  }
   
  function resume(message, server) {
    server.connection.dispatcher.resume();
  }
   
  function skip(message, server) {
    server.connection.dispatcher.end();
  }
   
  function stop(message, server) {    
    server.songs = [];
    server.connection.dispatcher.end();
  }
 
client.login('TOKEN');


///
const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Codelyon is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 

    //follow this format for rest of your commands, using if statement as shown above,
});
 
client.login('   ');

