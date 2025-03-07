import React from 'react';
import Banner from '../Banner'


function SadBanner({answer, resetGame}) {
  return <Banner status="sad">

      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <button className="resetButton" onClick={resetGame}>
        Reset
      </button>

  </Banner>;
}

export default SadBanner;
