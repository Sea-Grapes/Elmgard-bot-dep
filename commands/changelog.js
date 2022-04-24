module.exports = {
  name: "log",
  description: "log an update to the changelog channel",
  execute(client, message, args, Discord) {
    const channel = client.channels.cache.get('965393636483272765');
    const embed = new Discord.MessageEmbed()
    .setColor("#29adf4")
    .setURL("")
    .setTitle("Elmgard Update |")
    .setDescription("Temporary description")
    .addFields(
      {name: "foo", value: "bar"},
    )
    .setTimestamp()
    .setFooter("Elmgard", "https://cdn.discordapp.com/attachments/965001853492416559/967575163782725682/iceshield-postprocess.png");
    channel.send({ embeds: [embed] });
  }
}