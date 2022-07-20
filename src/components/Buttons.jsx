import React from 'react'
import styled from 'styled-components'

const Buttons = ({ text }) => {
    return (
        <Btn>
            {text}
        </Btn>
    )
}

export default Buttons;


const Btn = styled.button``;
