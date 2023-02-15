const cachedCommands = {};

function cacheCommand(command, func) {
  cachedCommands[command] = func;
}

function handleCommand(command) {
  const cachedFunc = cachedCommands[command];
  if (cachedFunc) {
    cachedFunc();
  } else {
    console.log(`No cached function found for command '${command}'`);
  }
}

function getCache(){
    return cachedCommands;
}



module.exports = {
    handleCommand, cacheCommand, getCache
};