const snekfetch = require('snekfetch');
const config = require('../config.json');

snekfetch.post('https://cleverbot.io/1.0/create')
  .send({
    user: config.api.cleverbot_user,
    key: config.api.cleverbot_key,
  })
  .then((response) => {
    const parsed = JSON.parse(response.text);
    if (parsed.status !== 'success') return console.error(parsed.status);
  });

/* module.exports = {
  ask: (question, callback) => {
    callback(null, 'Unfortunately, Cleverbot is unavailable for the moment. Please retry later!');
  },
}; */
