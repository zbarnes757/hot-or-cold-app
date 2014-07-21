
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	//Global Variables
  	var resetGuess = 0;
  	var randomNum;
  	var newGuess;
  	var checkGuess;

  	//Reset the game
  	function newGame () {
  		resetGuess = 0;
  		$('#count', '#feedback').content().remove();
  		$('#count').append(resetGuess);
  		$('#feedback').append("Make your Guess!");
  		$('#userGuess').val('');
  		$('#guessList').content().remove();
  		generateNum();
  	}

  	$(".new").click(newGame);

  	//Generate a random number to guess
  	function generateNum () {
  		randomNum = Math.floor(Math.random()*100+1);
  		console.log("New number is " + randomNum);
  	}

  	generateNum();




  	//Evaluate the guess
  	function evalGuess (guess) {
  		console.log("User's guess is " + guess);
  		if (isNaN(guess) || guess%1 !== 0) {
  			writeFeedback("Entry must be a positive number without decimals.");
  		} else if (guess > 100 || guess < 0) {
  			writeFeedback("Number must be between 0 and 100.");
  		} else if (guess === '') {
  			writeFeedback("Please provide a number.");
  		} else {
  			trackGuess();
  			listGuess();
  			checkGuess = (Math.abs(newGuess - randomNum))
  			if (checkGuess === 0) {
  				writeFeedback("Yes! You got it!");
  			} else if (checkGuess <= 5) {
  				writeFeedback("You are on fire!");
  			} else if (checkGuess > 5 && checkGuess <= 15) {
  				writeFeedback("Warm!");
  			} else if (checkGuess > 15 && checkGuess <= 30) {
  				writeFeedback("Cold.");
  			} else {
  				writeFeedback("Ice Cold.");
  			}
  		}
  	}

  	$('#guessButton').click(function() {
  		newGuess = $('input').val();
  		evalGuess(newGuess);
  		$('#userGuess').val('');
  	})

  	//Function for providing feedback
  	function writeFeedback (feedback) {
  		$('#feedback').text(feedback);
  	}
  	//Track number of guesses
  	function trackGuess () {
  		resetGuess += 1;
  		$('#count').text(resetGuess);
  	}
  	//Display past guesses
  	function listGuess () {
  		$('#guessList').append("<li>" + newGuess + "</li>");
  	}


});


