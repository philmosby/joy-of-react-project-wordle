import React from 'react';
import * as utils from '../../utils.js'
import * as constants from '../../constants.js'

import Guess from '../Guess'

function GameBoard({guesses, answer, letters, setLetters}) {


  let newClass = "cell" 


  


  return (




    <div className="guess-results">
    {utils.range(constants.NUM_OF_GUESSES_ALLOWED).map((index)=>(


      <Guess 
        guess={guesses[index] ? guesses[index] : ""} 
        answer={answer}
        key={index}
        letters={letters} 
        setLetters={setLetters}
        >
      </Guess>


     ))}
    </div>





  );
}

export default GameBoard;
