const commandRegistry = require('../registry/commandRegistry.js');

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    const inputArray = input.split(' ');
    const command = inputArray[0];
    const args = inputArray.slice(1);
  
    const commandFunc = commandRegistry.getCache()[command];
    if (commandFunc) {
      commandFunc(...args);
    } else {
      console.log(`Invalid command: ${command}`);
    }
});
  


module.exports = {
    commandRegistry
};