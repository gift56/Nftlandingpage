import React from 'react'
import styled from 'styled-components'

const Buttons = ({ text, blue = false }) => {
    return (
        <Div>
            <button className={`${blue ? "blue" : ""}`}>{text}</button>
        </Div>
    )
}

export default Buttons;


const Div = styled.div`
  button {
    border-radius: 4rem;
    padding: 0.8rem 2rem;
    border: none;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    :not(.blue) {
          background: transparent;
          border: 1px solid #fff;
          &:hover{
            color: #2d69fd;
          }
    }
   }
   .blue {
      background-color: #2d69fd;
   }
`;
