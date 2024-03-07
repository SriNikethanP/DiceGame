import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const diceBoxes = [1, 2, 3, 4, 5, 6];

  function numberHandling(item) {
    setSelectedNumber(item);
    setError("");
  }

  return (
    <NumberSelection>
      <div className="error">
        <p>{error}</p>
      </div>
      <div className="boxes">
        {diceBoxes.map((item, index) => {
          return (
            <Box
              isSelected={item === selectedNumber}
              key={index}
              onClick={() => numberHandling(item)}
            >
              {item}
            </Box>
          );
        })}
      </div>
      <div className="selectNumbers">
        <p>Select Number</p>
      </div>
    </NumberSelection>
  );
};

export default NumberSelector;

const NumberSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .error {
    font-size: 24px;
    color: red;
  }
  .boxes {
    display: flex;
    gap: 24px;
  }
  .selectNumbers {
    width: 100%;
    display: flex;
    justify-content: end;
    p {
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  border: 2px solid black;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isSelected ? "white" : "black")};

  &: hover {
    cursor: pointer;
  }
`;
