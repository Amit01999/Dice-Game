import { useState } from 'react';
import './Totalcore.css';

const TotalScore = ({
  error,
  score,
  selectedNum,
  setselectedNum,
  handerNumberSelecter,
}) => {
  const numarry = [1, 2, 3, 4, 5, 6];
  return (
    <div className="totalPageDiv">
      <div className="totalNum">
        <h1>{score}</h1>
        <h3>Total Score</h3>
      </div>
      <div>
        <div className="boxwithText">
          <p>{error}</p>
          <div className="number">
            {numarry.map((num, index) => (
              <button
                className={
                  num === selectedNum ? 'selectButton' : 'arrynumberbox'
                }
                onClick={() => handerNumberSelecter(num)}
                key={index}
              >
                {num}
              </button>
            ))}
          </div>
          <h3>Select a number</h3>
        </div>
      </div>
    </div>
  );
};

export default TotalScore;
