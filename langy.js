require("dotenv").config();

var stuff = require("./script.js");
var inquirer = require("inquirer");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

spotify.?