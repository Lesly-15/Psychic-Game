        // Define the alphabet array
        var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var lettersPlayed = [''];
        var lettersPlayedText=document.getElementById("lettersPlayed");
            
        
        // player will have only 15 lives to guess the right letter
        var lives = 0;
        var livesText = document.getElementById ("lives");
            
 
        // This will generate the random letter for the player to guess - why it does not work when I declare it as a function? 
        // Why it generates a number instead of a letter?
        
        var toGuess = letterChoice[Math.floor(Math.random() * letterChoice.length)];
            console.log (toGuess);        
        
        // ***How the game works:
        function playerTryToGuess() {
            // player will enter the letter is guessing
            var guess = document.getElementById("playerGuess")["0"].value;
                console.log(guess);
            

            // compare user guess vs random letter
            // check if wrong...
            if (guess !== toGuess){
                lettersPlayed.push(guess);
                console.log (lettersPlayed);
                if (lettersPlayed.length > 14){
                    alert ("you are not a mind reader")
                }
                
            }
            // check if right...
            else if (guess === toGuess){
                alert("WOW! you are a great mind reader");

            }

            var guess = document.getElementById("playerGuess")["0"].select();
        }      
    

        