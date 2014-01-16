const GROUPMETOKEN = process.env.GROUPMETOKEN;
const GROUP_ID = process.env.GROUP_ID;
const URL = process.env.URL;
const AVATAR = process.env.AVATAR;

var config =  {
    token: GROUPMETOKEN,
    name: "GroupRulesBot",
    group: GROUP_ID,
    url: URL
};

if (AVATAR) {
    config.avatar_url = AVATAR;
}

var ruleBot = require('fancy-groupme-bot')(config);

ruleBot.on('botRegistered', function() {
    console.log(config.name + " is now registered");
});

ruleBot.on('botMessage', function(bot, message) {
  console.log(message.name + " said " + message.text);
  if (message.name != bot.name) {
      if (message.text == "testme") {
          bot.message(message.name + " wanted to talk.");
      }
  }
});

console.log(config.name + " is now online.");
ruleBot.serve(8000);