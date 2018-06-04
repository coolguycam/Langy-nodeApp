const stuff = require("./app.js");
const fs = require("fs");
const inquirer = require("inquirer");

var update = new Date();
update = update.toDateString();

function langy() {
  console.log("here");
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you want to see?",
        choices: ["Twitter"],
        name: "selection"
      }
    ])
    .then(function(user) {
      fs.appendFile(
        "log2.txt",
        "\n\n User input request at: " + update + "\n\n",
        function(err) {
          if (err) {
            throw err;
          }
        }
      );
      var Twitter = require("twitter");
      var me = new Twitter(stuff.twitter);
      var myName = { screen_name: "KeeelaCam" };
      me.get("statuses/user_timeline", myName, function(
        error,
        tweet,
        response
      ) {
        if (!error) {
          console.log("Here are your last 20 Tweets:");
          console.log("\n");
          fs.appendFile(
            "log2.txt",
            "\nKeeelaCam's last 20 tweets " + user.username + ": \n ",
            function(err) {
              if (err) throw err;
            }
          );
          // console.log(tweet);
          
          for (var i = 0; i < 7; i++) {
            console.log(tweet[i].text);
            console.log("Date/Time created: " + tweet[i].created_at);
            console.log("");

            fs.appendFile(
              "log2.txt",
              tweet[i].text +
                "\nDate/Time created: " +
                tweet[i].created_at +
                "\n \n",
              function(err) {
                if (err) throw err;
              }
            );
          }
          // langy();
        } else {
          console.log(error);
        }
      });
    });
}

langy();
