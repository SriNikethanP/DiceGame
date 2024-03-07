import React from "react";
import styled from "styled-components";

const TotalScore = ({score }) => {
  return (
    <ScoreCounter>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreCounter>
  );
};

export default TotalScore;

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
