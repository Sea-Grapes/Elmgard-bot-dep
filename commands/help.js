module.exports = {
  name: "help",
  description: "get Lumens commands",
  execute(client, message, args, Discord) {
    const embed = new Discord.MessageEmbed()
    .setColor("#29adf4") //#78bd2b
    .setURL("")
    .setTitle("Lumens bot help")
    .setDescription("The world is a large place, and we are all part of its eternal cycle. Have faith, for what you request I shall provide:")
/*
Say, you look a bit lost, stranger. Here's a couple directions if you're feeling lost:
*/
    .addFields(
      {name: "!help:", value: "lists the bot's commands"},
    )
    .setTimestamp()
    .setFooter("Lumens", "https://cdn.discordapp.com/attachments/965001853492416559/967575163782725682/iceshield-postprocess.png");
    message.channel.send({ embeds: [embed] });
  }
}