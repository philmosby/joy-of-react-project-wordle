import React from 'react';
import * as helpers from '../../game-helpers.js'


function TextInput({guess, setGuess, guesses, setGuesses, gameStatus, setGameStatus, answer, letters, setLetters}) {



  function updateLetters(){
    
      guessResult = helpers.checkGuess(guess, answer);
      console.log("UPDATE LETTERS" + guessResult)
      if (guessResult) {
        const nextLetters = [...letters];
        guessResult.forEach(({ letter, status }) => {
          console.log(letter + status);
          const letterToUpdate = nextLetters.find(l => l.letter === letter);
          if (letterToUpdate) {
            if(letterToUpdate.status=="new" || letterToUpdate.status=="incorrect" || (letterToUpdate.status=="misplaced" && status=="correct")){
              letterToUpdate.status = status;
              console.log("UPDATED LETTER: " + letterToUpdate.letter)
            }
           
          }
        });
    
        setLetters(nextLetters); // Now React detects a state change
      }
      
    
      console.log(guessResult)
  }

  return(
  <>




  <form className="guess-input-wrapper"
    onSubmit={(event)=>{
      event.preventDefault();

      if(guess.length != 5){
        alert("String must be exactly 5 characters long!")
        return;
      }

      const nextGuesses = [...guesses]
      const nextGuess = 
        {
          aGuess: guess,
          guessId: Math.random()
        }
      

      console.log(guess)
      
      nextGuesses.push(nextGuess)
      setGuesses(nextGuesses)
      console.log(guesses);


      // Now check answer
      if(guess == answer){
        setGameStatus("won");
      }else if(guesses.length > 4){
        setGameStatus("lost");
      }
      
      updateLetters();

      setGuess("");
    }}
  >

    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" 
      disabled={gameStatus != "live"}
      maxLength={5}
      value={guess}
      onChange={(event)=>
        setGuess(event.target.value.toUpperCase())
      }
    />



  </form>


  </>
  );
}

export default TextInput;
