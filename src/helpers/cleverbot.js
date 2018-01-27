const Cleverbot = require('cleverbot.io');
const config = require('../config.json');

const bot = new Cleverbot(config.api.cleverbot_user, config.api.cleverbot_key);

bot.create(() => {
  bot.setNick('iBot');
});

module.exports = bot;
