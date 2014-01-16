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

//console.log("Attempting to intialize a bot with this configuration: ", config);
var bot = require('fancy-groupme-bot');
var ruleBot = bot(config);

ruleBot.on('botRegistered', function() {
    console.log(config.name + " is now registered");
    ruleBot.message("I'm alive!");
});

ruleBot.on('botMessage', function(bot, message) {
  console.log(message.name + " said " + message.text);
  if (message.name != bot.name) {
      if (message.text == "testme") {
          bot.message(message.name + " wanted to talk.");
      }
  }
});

console.log("Starting server.");
ruleBot.serve(process.env.PORT || 3000);