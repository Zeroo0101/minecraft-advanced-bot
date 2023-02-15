const { createBot } = require('./bot/registry/botRegistry.js');
const handler = require('./bot/handler/botHandler.js');
const viewHandler = require('./bot/handler/botViewerHandler.js');
const commandHandler = require('./commands/handler/commandHandler.js');


function main(){
    
    const bot = createBot("SERVER-IP", "ACCOUNT-EMAIL", "ACCOUNT-PASSWORD", 25565, "1.19.3", "microsoft")


    bot.on('kicked', console.log)
    bot.on('error', console.log)

    bot.once('spawn', () => {
        console.log("----------- Bot " + bot.username + " has spawned. -----------")
        viewHandler.view(bot, 3007, false);
        registerSchedules(bot);

        const path = [bot.entity.position.clone()]
        bot.on('move', () => {
            if (path[path.length - 1].distanceTo(bot.entity.position) > 1) {
                path.push(bot.entity.position.clone())
                bot.viewer.drawLine('path', path)
            }
        })

    })

    bot.on('chat', (username, message) => {
        console.log(username + " -> " + message)
    })


    registerCommands(bot);
}

function registerCommands(bot) {

    cmdRegistry = commandHandler.commandRegistry;

    cmdRegistry.cacheCommand("right-click", () => {
        handler.rightClick(bot);
    });

    cmdRegistry.cacheCommand("left-click", () => {
        handler.leftClick(bot);
    });

    cmdRegistry.cacheCommand("chat", (...args) => {
        const message = args.join(" ");
        bot.chat(message);
    })

    cmdRegistry.cacheCommand("walk", (args) => {
        bot.setControlState('forward', true);
        let seconds = parseInt(args);
        setTimeout(() => {
            bot.setControlState('forward', false);
        }, (seconds*1000));
    })


}



  

main();
