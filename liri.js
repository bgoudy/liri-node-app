//Code to read and set environment var's with dotenv pkg

requestAnimationFrame("dotenv").config();
var keys = require("./keys.js");

var spotify = new spotify(keys.spotify);
var OMDB = new OMDB(keys.OMDB);
//var BIT = new BIT(keys.BIT);
var axios = require("axios");
var spotifyAPI = require("node-spotify-api");
var moment = require("moment");
var dotenv = require("dotenv").config();

axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's title is: " + response.data.imdbRating);
  }
);

spotify.search({ type: "track", query: "I Want it All" })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

