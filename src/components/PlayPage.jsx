import React, { useState } from 'react';
import TotalScore from './TotalScore';
import RoleDice from './RoleDice';

const PlayPage = () => {
  const [rollDiceNum, setRollDiceNum] = useState(1);
  const [selectedNum, setSelectedNum] = useState(null);
  const [score, setscore] = useState(0);
  const [error, setError] = useState();
  const generateNumber = (min, max) => {
    if (!selectedNum) {
      setError('You have not select a number');
      return;
    }
    const selectedDiceNum = Math.floor(Math.random() * (max - min + 1) + min);
    setRollDiceNum(selectedDiceNum);
    if (selectedNum === selectedDiceNum) {
      setscore(prev => prev + selectedDiceNum);
    } else {
      setscore(prev => prev - selectedDiceNum);
    }
    setSelectedNum(undefined);
    console.log(selectedDiceNum);
  };

  const resetDice = () => {
    setRollDiceNum(1);
  };
  const handerNumberSelecter = num => {
    setSelectedNum(prev => num);
    setError('');
    console.log(num);
  };
  return (
    <div>
      <TotalScore
        error={error}
        score={score}
        handerNumberSelecter={handerNumberSelecter}
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
      />
      <RoleDice
        rollDiceNum={rollDiceNum}
        generateNumber={generateNumber}
        resetDice={resetDice}
      />
    </div>
  );
};

export default PlayPage;
