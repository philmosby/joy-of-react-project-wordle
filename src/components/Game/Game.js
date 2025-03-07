import React from 'react';

import TextInput from '../TextInput';
import GameBoard from '../GameBoard';
import Keyboard from '../Keyboard';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
//const answer = sample(WORDS);





function Game() {

  const letterSet = [
    { letter: "A", status: "new" },
    { letter: "B", status: "new" },
    { letter: "C", status: "new" },
    { letter: "D", status: "new" },
    { letter: "E", status: "new" },
    { letter: "F", status: "new" },
    { letter: "G", status: "new" },
    { letter: "H", status: "new" },
    { letter: "I", status: "new" },
    { letter: "J", status: "new" },
    { letter: "K", status: "new" },
    { letter: "L", status: "new" },
    { letter: "M", status: "new" },
    { letter: "N", status: "new" },
    { letter: "O", status: "new" },
    { letter: "P", status: "new" },
    { letter: "Q", status: "new" },
    { letter: "R", status: "new" },
    { letter: "S", status: "new" },
    { letter: "T", status: "new" },
    { letter: "U", status: "new" },
    { letter: "V", status: "new" },
    { letter: "W", status: "new" },
    { letter: "X", status: "new" },
    { letter: "Y", status: "new" },
    { letter: "Z", status: "new" },
  ]


  const [letters, setLetters] = React.useState([
   ...letterSet
  ]);

  const [answer, setAnswer] = React.useState(()=>{
    return sample(WORDS);
  });
  
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const [guess, setGuess] = React.useState("");

  const [guesses, setGuesses] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState("live"); //live, won, lost

  function resetGame(){
    console.log("called");
    setGameStatus("live");
    setGuesses([]);
    setAnswer(sample(WORDS));
    setLetters([...letterSet]);
  }

/*
    <div className="guess-results">

      {guesses.map(({aGuess, guessId})=>(
        <p className="guess" key={guessId}>{aGuess}</p>
      ))

      }
      
    </div>
*/


  return(

    <>



    <GameBoard guesses={guesses} answer={answer} ></GameBoard>


    <TextInput guess={guess} setGuess={setGuess} guesses={guesses} setGuesses={setGuesses} gameStatus={gameStatus} setGameStatus={setGameStatus} answer={answer} letters={letters} setLetters={setLetters} ></TextInput>



    {gameStatus === 'won' && (
      <HappyBanner guesses={guesses.length} resetGame={resetGame}></HappyBanner>
    )}

    {gameStatus === 'lost' && (
        <SadBanner answer={answer} resetGame={resetGame}></SadBanner>
      )}

    <Keyboard letters={letters}></Keyboard>

    </>
  );
}

export default Game;
