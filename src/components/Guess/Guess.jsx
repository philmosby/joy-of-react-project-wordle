import React from 'react';
import * as helpers from '../../game-helpers.js'

function Guess({guess, answer, letters, setLetters}) {
  console.log("Guess: " + guess + "Answer: " + answer);

  guessResult = helpers.checkGuess(guess.aGuess, answer);

 
  const classPre = "cell "

  return(

    <p className="guess" key={Math.random()}>
    <span className=
    {
      guess ? classPre + guessResult[0].status : classPre
    }>{
     guess ? guess.aGuess[0] : ""
      }
    </span>

    <span className=
    {
      guess ? classPre + guessResult[1].status : classPre
    }>{
     guess ? guess.aGuess[1] : ""
      }
    </span>

    <span className=
    {
      guess ? classPre + guessResult[2].status : classPre
    }>{
     guess ? guess.aGuess[2] : ""
      }
    </span>

    <span className=
    {
      guess ? classPre + guessResult[3].status : classPre
    }>{
     guess ? guess.aGuess[3] : ""
      }
    </span>

    <span className=
    {
      guess ? classPre + guessResult[4].status : classPre
    }>{
     guess ? guess.aGuess[4] : ""
      }
    </span>

  </p>

  );
}

export default Guess;
