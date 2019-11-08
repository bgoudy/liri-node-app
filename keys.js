console.log("This is loaded");

var spotify = {
    id: "a1f8f4afbdc44833957fa81695f1c221",
    secret: "04dd9c2deb584b46b2a161b65ca39c83"
};

var OMDB = {
    key: f22f528f
};

//Bands In Town Would not respond with an API Key
/*var BIT = {
    key: 
};*/

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.OMDB = {
    id: process.env.OMDB_ID,
    secret: process.env.OMDB_SECRET
};

exports.BIT = {
    id: process.env.BIT_ID,
    secret: process.env.BIT_SECRET
};

