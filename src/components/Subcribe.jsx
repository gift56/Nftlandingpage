import React from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import subcribe from '../assets/subscribe.png';

const Subcribe = () => {
    return (
        <Section>
            <div className="content">
                <h2>Subscribe for Get update every New Offers</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    At perferendis tenetur voluptates deserunt ab alias.
                </p>
                <div className="input-container">
                    <input type="text" placeholder='Enter Email' />
                    <BsFillArrowDownCircleFill />
                </div>
                <div className="image">
                    <img src={subcribe} alt="subcribeimg" />
                </div>
            </div>
        </Section>
    )
}

export default Subcribe;

const Section = styled.section``;
