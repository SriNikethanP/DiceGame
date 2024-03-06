import React from "react";
import styled from "styled-components";

const DiceRoll = () => {
  return (
    <Container>
      <div className="nav">
        <ScoreCounter>
          <h1>0</h1>
          <p>Total Score</p>
        </ScoreCounter>
        <div className="numberSelection">
                  <Box>1</Box>
                  <div>
                      
          <p>Select Number</p>
                  </div>
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p>Click on Dice to roll</p>
          <Button>Reset Score</Button>
          <Button>Show Rules</Button>
        </div>
      </div>
    </Container>
  );
};

export default DiceRoll;
const Container = styled.div`
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
}
.numberSelection{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

div{
    display: flex;
  justify-content: end;
    p{
        font-size:24px;
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

const Button = styled.button``;

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
