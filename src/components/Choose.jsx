import React from 'react';
import styled from 'styled-components';
import choose from '../assets/choose.png';
import Buttons from './Buttons';

const Choose = () => {
    return (
        <Section>
            <div className="image">
                <img src={choose} alt="choose img" />
            </div>
            <div className="content">
                <h2>Why should you choose Our Website?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae corporis praesentium quisquam quasi! Aliquid
                    eius vero aliquam. Minus quas saepe, perferendis
                    distinctio incidunt aad eligendi, maxime quisquam
                    vel sed? Harum, ex ipsam.
                </p>
                <Buttons text="Read More" blue />
            </div>
        </Section>
    )
}

export default Choose;

const Section = styled.section`
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 3rem;
     margin: 0 9rem;
     margin-bottom: 5rem;
     .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
        h2 {
         font-size: 4rem;
        }
     }
`;