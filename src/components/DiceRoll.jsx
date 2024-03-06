import React, { useState } from "react";
import styled from "styled-components";

const DiceRoll = () => {
   
  const diceBoxes = [1, 2, 3, 4, 5, 6];

  const [diceNumber, setDiceNumber] = useState(1);

  function generateRandomNumber(min,max) {
    const e = ( Math.floor(Math.random() * (min-max)+ max));
    setDiceNumber(e) 
  }
  function selectBox(currentIndex) {
  
  }

  return (
    <Container>
      <div className="nav">
        <ScoreCounter>
          <h1>0</h1>
          <p>Total Score</p>
        </ScoreCounter>
        <div className="numberSelection">
          <div className="boxes">

          {diceBoxes.map((item, index) => {
            return <Box
              key={index}
              onClick={()=>selectBox(index)}
            >{item}</Box>
         })}
          </div>
          <div className="selectNumbers">
            <p>Select Number</p>
          </div>
        </div>
      </div>

      <div className="diceBtn">
        <img
              onClick={()=>generateRandomNumber(1,7)}
          
          src={`/images/dice_${diceNumber}.png`} alt="dice 1" />
        <p>Click on Dice to roll</p>

        <Button>Reset Score</Button>
        <Button>Show Rules</Button>
      </div>
    </Container>
  );
};

export default DiceRoll;
const Container = styled.div`
  .diceBtn {
    img {
      width: 250px;
      height: 250px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 24px;
  }
  .numberSelection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
.boxes{
  display: flex;
  gap: 24px;}
    .selectNumbers {
      width: 100%;
      display: flex;
      justify-content: end;
      p {
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
`;

const ScoreCounter = styled.div`
  display: flex;
  flex-direction: column;
  width: 135px;
  align-items: center;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    white-space: nowrap;
  }
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

const Box = styled.div`
  width: 72px;
  height: 72px;
  background-color: white;
  border: 2px solid black;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
