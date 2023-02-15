const { mineflayer: mineflayerViewer } = require('prismarine-viewer');



function view(bot, port = 3007, firstPerson = true){
    mineflayerViewer(bot, { port: port, firstPerson: firstPerson })
}


module.exports = {
    view
};