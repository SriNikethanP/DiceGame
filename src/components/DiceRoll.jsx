import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import GamePlay from "./GamePlay";

const DiceRoll = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  function Rolldice() {
    const randomNumber = generateRandomNumber(1, 7);
    setDiceNumber(randomNumber);

    selectedNumber === randomNumber
      ? setScore((prev) => prev + 4)
      : setScore((prev) => prev - 2);

    setSelectedNumber(undefined);
  }

  function generateRandomNumber(min, max) {
    const e = Math.floor(Math.random() * (min - max) + max);
    return e;
  }

  return (
    <Container>
      <div className="nav">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setError={setError}
        />
      </div>
      <GamePlay
        setScore={setScore}
        setError={setError}
        selectedNumber={selectedNumber}
        diceNumber={diceNumber}
        setDiceNumber={setDiceNumber}
        Rolldice={Rolldice}
      />
    </Container>
  );
};

export default DiceRoll;
const Container = styled.div`
  
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 24px;
  }
 
  }
`;
