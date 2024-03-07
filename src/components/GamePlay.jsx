import React, { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";

const GamePlay = ({
  diceNumber,
  Rolldice,
  selectedNumber,
  setError,
  setScore,
}) => {
  const [showrules, setShowRules] = useState(null);

  return (
    <GameContainer>
      <img
        onClick={() =>
          selectedNumber !== undefined
            ? Rolldice()
            : setError("You have not selected any Number")
        }
        src={`/images/dice_${diceNumber}.png`}
        alt="dice 1"
      />
      <p>Click on Dice to roll</p>

      <Button onClick={() => setScore(0)}>Reset Score</Button>
      <Button onClick={() => setShowRules(Rules)}>Show Rules</Button>
      <div>{showrules}</div>
    </GameContainer>
  );
};

export default GamePlay;

const GameContainer = styled.div`
  img {
    width: 250px;
    height: 250px;

    &: hover {
      cursor: pointer;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const Button = styled.button`
  width: 220px;
  background-color: black;
  height: 44px;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;

  &: hover {
    background-color: white;
    color: black;
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;
