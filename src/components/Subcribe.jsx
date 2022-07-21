import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import subcribe from '../assets/subscribe.png';

const Subcribe = () => {
    return (
        <Section>
            <div className="content">
                <h2>Subscribe for Get update every New Offers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
                    placeat eveniet nihil provident explicabo obcaecati voluptatibus cumque atque odit earum enim.
                </p>
                <div className="input-container">
                    <input type="text" placeholder='Enter Email' />
                    <BsFillArrowRightCircleFill />
                </div>
            </div>
            <div className="image">
                <img src={subcribe} alt="subcribeimg" />
            </div>
        </Section>
    )
}

export default Subcribe;

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
        .input-container {
               display: flex;
               align-items: center;
               justify-content: center;
               padding: 0.5rem;
               width: max-content;
               gap: 1rem;
               border: 1px solid #c4c4c4;
               border-radius: 3rem;
               input {
                 border: none;
                 outline: none;
                 padding-left: 2rem;
                 padding-right: 5rem;
                 font-size: 1.3rem;
               }
               svg { 
                 font-size: 3rem;
                 color: #2d69fd;
               }
        }
     }
`;
