import React, { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import PlayPage from './components/PlayPage';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev);
  };
  return (
    <>
      {isGameStarted ? (
        <PlayPage></PlayPage>
      ) : (
        <FirstPage toggleGamePlay={toggleGamePlay}></FirstPage>
      )}
    </>
  );
}

export default App;
