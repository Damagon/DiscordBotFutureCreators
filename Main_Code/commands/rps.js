const Discord = require('discord.js')

module.exports = {
    name: "rps",
    description: "rock paper scissors command",

    async run (client, message, args) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rock Paper Scissors")
        .setDescription("React to play!")
        .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("✂")
        await msg.react("📰")

        const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max: 1, time: 30000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                .setTitle("Result")
                .addField("Your Choice", `${reaction.emoji.name}`)
                .addField("Bots choice", `${me}`)
                await msg.edit(result)

                if((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "✂" && reaction.emoji.name === "📰") ||
                (me === "📰" && reaction.emoji.name === "🗻")) {
                    message.reply("You Lost! <:FeelsBadMan:856861752162648074>");
                } else if (me === reaction.emoji.name) {
                    return message.reply("Its a tie! <:HistyNeutral:856862192015507459>");
                } else {
                    return message.reply("You Won! <:FeelsGoodMan:856861611255791616>");
                }
            })
            .catch(collected => {
                message.reply('Process has been cancelled, you failed to respond in time!');
            }) 

    }
}