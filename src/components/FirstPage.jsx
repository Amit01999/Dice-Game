import React from 'react';
import './FirstPage.css';
const FirstPage = ({ toggleGamePlay }) => {
  return (
    <div className="firstpagediv">
      <div className="dicimg">
        <img src="../../public/image/dices 1.png" alt="" />
      </div>
      <div className="dicetext">
        <h1>DICE GAME</h1>
        <button onClick={toggleGamePlay}>Play now</button>
      </div>
    </div>
  );
};

export default FirstPage;
