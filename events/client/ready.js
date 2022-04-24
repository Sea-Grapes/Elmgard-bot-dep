module.exports = (Discord, Client, message) => {
  console.log("Systems online");
  Client.user.setActivity("Elmgard | !help", {
    type: "PLAYING"
  });
}