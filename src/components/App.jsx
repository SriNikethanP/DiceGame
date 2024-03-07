import React, { useState } from "react";
import StartGame from "./StartGame";
import DiceRoll from "./DiceRoll";

const App = () => {
  const [gameStarted, setGameState] = useState(false);

  function toggleGameState() {
    setGameState((prev) => !prev);
  }

  return (
    <div>
      {gameStarted ? <DiceRoll /> : <StartGame toggle={toggleGameState} />}
    </div>
  );
};

export default App;
