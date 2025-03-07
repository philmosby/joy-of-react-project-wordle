import React from 'react';
import * as helpers from '../../game-helpers.js';
import {range} from '../../utils.js';

function Guess({guess, answer, letters, setLetters}) {
  console.log("Guess: " + guess + "Answer: " + answer);

  guessResult = helpers.checkGuess(guess.aGuess, answer);

 
  const classPre = "cell "

  return(

    <p className="guess">

      {range(5).map((num)=>(
        <span className=
        {
          guess ? classPre + guessResult[num].status : classPre
        }>{
        guess ? guess.aGuess[num] : ""
          }
        </span>

      ))}


    </p>

  );
}

export default Guess;
