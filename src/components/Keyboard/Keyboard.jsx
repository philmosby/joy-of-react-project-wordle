import React from 'react';



function Keyboard({letters}) {

const classPre = "keyboardKey ";


  return (

      

    <div class="keyboardSection">
      


      {letters.map(({ letter, status }) => (
        <div key={letter} className={classPre + status}>
          {letter}
        </div>
      ))}



    </div>


  );
}

export default Keyboard;
