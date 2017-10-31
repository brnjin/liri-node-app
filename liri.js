var command = process.argv;

//Sets up the Index of 2 to be a command call
var commands = command[2];

//Sets name of variable the user is trying to search
var item = command[3]


switch(commands) {
	case "movie-this":
		movieCall();
		break;
	case "my-tweets":
		tweetIt();
		break;
/*	case "spotify-this-song":
		spotifyThis();
		break;*/
	case "do-what-it-says":
		doTheThing();
		break;
	default:
		console.log("Please enter a vaild command");
};


function movieCall(){
	//NODE package for OMDB
	var request = require("request");

	//OMDB reques  
	request("http://www.omdbapi.com/?apikey=40e9cece&t=" + item, function(error, response, body) {

	  // If the request is successful (i.e. if the response status code is 200)
	  if (!error && response.statusCode === 200) {

	    // Parse the body of the site and recover just the imdbRating
	    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
	    console.log("The movie's title is: " + JSON.parse(body).Title);
	    console.log("This movie came out on: " + JSON.parse(body).Year);
	    console.log("IMDB rated this movie: " + JSON.parse(body).imdbRating);
	    console.log("Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[2].Source);
	    console.log("This movie was produced in: " + JSON.parse(body).Country);
	    console.log("The language of this movie is: " + JSON.parse(body).Language);
	    console.log("Plot of this movie is: " + JSON.parse(body).Plot);
	    console.log("Actors in this movie are: " + JSON.parse(body).Actors);
	  }
	});
};

function tweetIt(){
	//Twitter key from keys.js
	var twitter = require("./keys.js");
	var twitterkey = twitter.twitterKeys;
	//twitter request with package
	var params = {screen_name: 'green_tonic_', count: 10 };
	twitterkey.get('statuses/user_timeline', params, function(error, tweets, response) {
  	if (!error) {
  		for (var i = 0; i < tweets.length; i++){
    	console.log(tweets[i].text);
    	};
 	}
});
};

function doTheThing(){
	//fs package to grab text from random.txt
	var fs = require("fs");
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		};
	//getting the second item to search on spotify npm
	item = data[1]
	console.log(data);
/*	commands = data.split(",").splice(",");*/
	movieCall();
	});	
};