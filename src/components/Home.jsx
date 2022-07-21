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
                    <h1>Explore Our
                        <span>
                            <img src={Herotext} alt="heroText" />
                        </span> Hero
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
    position: relative;
    overflow: hidden;
    margin-bottom: 5rem;
    .ellipse {
        width: 30rem;
        height: 30rem;
        background: #ae54c27d;
        opacity: 0.5;
        border-radius: 100%;
        filter: blur(2000px);
        position: absolute;
        bottom: -30%;
        left: -10%;
        z-index: 1;
    }
    .container {
        padding: 2rem;
        margin: 0 2rem;
        display: flex;
        .content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 5rem;
            padding-right: 2rem;
            z-index: 10;
            h1 {
                color: #fff;
                font-size: 5rem;
            }
            p {
               color: #a6a6a6;
            }
            .buttons{
                display: flex;
                gap: 2rem;
            }
            .data {
                display: flex;
                gap: 5rem;
                .dataTab {
                      display: flex;
                      flex-direction: column;
                      gap: 1rem;
                      h2 {
                        color: #fff;
                        font-size: 2rem;
                      }
                      h5 {
                         text-align: center;
                         color: #a6a6a6;
                      }
                }
            }
        }
        .image{
            img{
                height: 40rem;
            }
        }
    }
`;
