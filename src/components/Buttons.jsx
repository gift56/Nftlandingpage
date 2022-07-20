import React from 'react'
import styled from 'styled-components'

const Buttons = ({ text, blue }) => {
    return (
        <Div>
            <button className={`${blue ? "blue" : ""}`}>{text}</button>
        </Div>
    )
}

export default Buttons;


const Div = styled.div``;
