import './RoleDice.css';

const RoleDice = ({ rollDiceNum, generateNumber, resetDice }) => {
  return (
    <div className="DiceImg">
      <div onClick={() => generateNumber(1, 6)}>
        <img src={`../../public/image/dice/dice_${rollDiceNum}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
      <button onClick={resetDice}>Reset</button>
      <button>Show Rules</button>
    </div>
  );
};

export default RoleDice;
