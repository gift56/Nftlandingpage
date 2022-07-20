import React from 'react'
import Navbar from './Navbar';
import styled from 'styled-components';

const Home = () => {
    return (
        <Section>
            <Navbar />
            <div className="ellipse"></div>
            <div className="container">
                <div className="content">
                    <h1>Explore Our Hero Text Digital NFT Market Place</h1>
                </div>
            </div>
        </Section>
    )
}

export default Home;


const Section = styled.section`
    margin: 0.5rem;
    background: #232835;
    border-radius: 1rem;
    height: 100vh;
`;
