import React from 'react';

function ResultsBanner({gameStatus, guesses, answer, resetGame}) {


  if(gameStatus =="live"){
    return;
  }


  if(gameStatus=="won"){
    return(
      <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses} guesses</strong>.
      </p>
      <button className="resetButton" onClick={resetGame}>
          Reset
      </button>
    </div>

    )


  }


  if(gameStatus=="lost"){
    return(
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <button className="resetButton" onClick={resetGame}>
          Reset
        </button>
      </div>
    )


  }

  
}

export default ResultsBanner;
