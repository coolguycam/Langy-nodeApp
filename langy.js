require("dotenv").config();

// const stuff = require("./app.js");
const inquirer = require("inquirer");
const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const params = { screen_name: "keeelacam" };
client.get("statuses/user_timeline", params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

client.get("search/tweets", { q: "node.js" }, function(
  error,
  tweets,
  response
) {
  console.log(tweets);
});
