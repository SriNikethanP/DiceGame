import React from 'react'
import styled from 'styled-components'


const Rules = () => {
  return (
    <RulesContainer>
        <h3>How to play dice game</h3>
        <div>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
      </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
width:800px;
display: flex;
flex-direction: column;
gap: 24px;
background-color: #FBF1F1;
padding: 20px;
`
