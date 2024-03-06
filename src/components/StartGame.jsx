import React,{useState} from "react";
import styled from "styled-components";

const StartGame = (props) => {



  return (
    <Container>
      <div className="mainImage">
        <img src="/images/mainpage.png" alt="dice" />
      </div>
      <div className="mainContent">
        <h1>DICE GAME</h1>
        <div className="btn">
          <Button onClick={props.toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1180px;
  height: 100vh;
  margin: 0 auto;
  .mainContent {
    h1 {
      font-size: 96px;
      font-weight: 800;
      white-space: nowrap;
    }
    display: flex;
    flex-direction: column;
    .btn {
      display: flex;
      justify-content: end;
    }
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
