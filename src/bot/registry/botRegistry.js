const mineflayer = require('mineflayer');



function createBot(
    host, username,
    password, port = 25565,
    version = false, auth = 'mojang'
  ){
  
    const bot = mineflayer.createBot({
      host,
      username,
      password,
      port,
      version,
      auth
    });
  
  return bot;
  
}


module.exports = {
    createBot
};
  