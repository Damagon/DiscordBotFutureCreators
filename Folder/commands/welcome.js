module.exports = {
    name: 'welcome',
    description: "this is a welcome command!",
    execute(message, args){
        message.channel.send('Hello and welcome, to this brand new server!',{tts: true});
        message.channel.send('<:FeelsGoodMan:856861611255791616>');
    }
}