"use strict";
$(document).ready(init);

var ranswers = shuffle(["42", "yes", "quite so", "col Mustard in the Chamagne room with a jackhammer"]);

var randGuess = localStorage.randGuess ? shuffle(JSON.parse(localstorage.randGuess)) 
	: ["why do I have no friends", "who has two thumbs and a jar of mayonaise", 
	"when will they ever learn", "who took the cookies from the cookie jar"];

function init () {
	

$("#search").keydown(search);
$("#suggest").keydown(suggest)
}

function search (event) {
	if ($("#search").val().length >= 2){
		console.log("if");
		
		if (randGuess.indexOf(/input/)){
			var index = randGuess.indexOf(/input/)
			console.log("if if ", randGuess[index])
			$("suggest").text(randGuess[0] );
		} 
	}
	else if  (event.which === 13){
		// add to the random guesses based on input
		localStorage.randGuess = randGuess.push(JSON.stringify($("#search")));
		$("#results").text(shuffle(randswer[0]));		
	}
	else{
		console.log("else")
	}
}

function suggest (event) {
	if  (event.which === 13){
		$("#search")
	}
}



function shuffle (array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}





