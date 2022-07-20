import React from 'react'
import Navbar from './Navbar';
import styled from 'styled-components';

const Home = () => {
    return (
        <Section>
            <Navbar />
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
