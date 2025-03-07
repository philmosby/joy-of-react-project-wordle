import React from 'react';
import Banner from '../Banner'

function HappyBanner({guesses, resetGame}) {

  return <Banner status="happy">

      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses === 1
                  ? '1 guess' 
                  : `${guesses} guesses`
        }
        </strong>.
      </p>
      <button className="resetButton" onClick={resetGame}>
          Reset
      </button>

  </Banner>;
}

export default HappyBanner;
