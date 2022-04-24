module.exports = {
  name: "poll",
  description: "make a new poll",
  execute(client, message, args, Discord) {
    // console.log(args);

    const argString = args.join(' ');

    let parsedArgs = argString.match(/"([^"]*)"/g);//match(/"(.*?)"/g);

    // console.log(parsedArgs);

    parsedArgs = parsedArgs.map(arg => {
      return arg.includes('"') ? arg.replaceAll('"', '') : arg;
    });

    console.log(parsedArgs);
    
    const pollChannel = client.channels.cache.get('967588550864425016');
    const pollEmbed = {
      color: 0x29adf4,
      title: 'Poll',
      description: parsedArgs[0],
      // fields: [
        
      // ],
      timestamp: new Date(),
      footer: {
        text: 'Lumens',
        icon_url: 'https://cdn.discordapp.com/attachments/965001853492416559/967575163782725682/iceshield-postprocess.png'
      }
    }
    pollChannel.send({ embeds: [pollEmbed] });
  }
}