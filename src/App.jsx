import React, { useState } from 'react';
import './App.css';

const choices = ['Stone', 'Paper', 'Scissors'];

const App = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    setUserChoice(choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);

    if (choice === choices[randomIndex]) {
      setResult('Tie!');
    } else if (
      (choice === 'Stone' && choices[randomIndex] === 'Scissors') ||
      (choice === 'Paper' && choices[randomIndex] === 'Stone') ||
      (choice === 'Scissors' && choices[randomIndex] === 'Paper')
    ) {
      setResult('You Win!');
    } else {
      setResult('You Lose!');
    }
  };

  return (
    <div className="game">
      <h1>Stone, Paper, Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="result">
        <p>You picked: {userChoice}</p>
        <p>Opponent picked: {computerChoice}</p>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default App;
