import React from 'react'
import Navbar from './Navbar';
import styled from 'styled-components';
import Hero from '../assets/hero.png';
import Herotext from '../assets/heroText.png';
import Buttons from './Buttons';

const Home = () => {
    return (
        <Section>
            <Navbar />
            <div className="ellipse"></div>
            <div className="container">
                <div className="content">
                    <h1>Explore Our Hero
                        <span>
                            <img src={Herotext} alt="heroText" />
                        </span>
                        Text Digital NFT Market Place
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Ad eum dolor architecto assumenda perferendis temporibus.
                    </p>
                    <div className="buttons">
                        <Buttons blue text="Explore Now" />
                        <Buttons text="Create NFT" />
                    </div>
                    <div className="data">
                        <div className="dataTab">
                            <h2>40K</h2>
                            <h5>Artwork</h5>
                        </div>
                        <div className="dataTab">
                            <h2>12K</h2>
                            <h5>Auction</h5>
                        </div>
                        <div className="dataTab">
                            <h2>20K</h2>
                            <h5>Artist</h5>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={Hero} alt="hero" />
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
