



function rightClick(bot, x=0, y=0, z=0){
    const targetBlock = bot.blockAt(bot.entity.position.offset(x, y, z));
    bot.activateBlock(targetBlock);
}

function leftClick(bot, x=0, y=0, z=0){
    const targetBlock = bot.blockAt(bot.entity.position.offset(x, y, z));
    bot.dig(targetBlock);
    bot.stopDigging();
}

function sendMessage(bot, message){
    bot.chat(message);
}


module.exports = {
    rightClick, leftClick, sendMessage
};