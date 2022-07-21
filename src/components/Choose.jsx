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
         font-size: 4.5rem;
        }
        p{
            color: #7b7e86;
            line-height: 2rem;
        }
     }
     @media screen and (max-width: 1080px) {
        flex-direction: column;
        margin: 2rem;
        .image{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                height: 50vw;
            }
        }
        .content{
            gap: 1rem;
            h2{
                font-size: 1rem;
            }
            p{
                font-size: 0.9rem;
                line-height: 1.3rem;
            }
        }
     }
`;