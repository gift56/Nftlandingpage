import React from 'react'
import styled from 'styled-components';
import { FaEthereum } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import marketplace1 from '../assets/marketplace1.png';
import marketplace2 from '../assets/marketplace2.png';
import marketplace3 from '../assets/marketplace3.png';
import marketplace4 from '../assets/marketplace4.png';
import marketplace5 from '../assets/marketplace5.png';
import marketplace6 from '../assets/marketplace6.png';
import marketplace7 from '../assets/marketplace7.png';
import marketplace8 from '../assets/marketplace8.png';
import Buttons from './Buttons';

const Marketplace = () => {
    const marketPlaceData = [
        {
            image: marketplace1,
            name: "Aiboi-meta"
        },
        {
            image: marketplace2,
            name: "Pedram-mohamm..."
        },
        {
            image: marketplace3,
            name: "Eduardo-pena"
        },
        {
            image: marketplace4,
            name: "Daeho-cha"
        },
        {
            image: marketplace5,
            name: "Justine-florentino"
        },
        {
            image: marketplace6,
            name: "Hoang-1-p-solan"
        },
        {
            image: marketplace7,
            name: "Joshua-jay"
        },
        {
            image: marketplace8,
            name: "Joshua-jay"
        }
    ];
    const marketPlaceType = [
        "All",
        "Art",
        "Generic",
        "Common",
        "Trading",
        "Rare"
    ]
    return (
        <Section>
            <div className="title">
                <h2>NFT Marketplace</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi dolor animi laudantium tempora.
                </p>
            </div>
            <div className="marketPlaceTypes">
                {marketPlaceType.map((text, index) => (
                    <Buttons text={text} key={index} blue={index === 0} />
                ))}
            </div>
            <div className="marketPlaces">
                {marketPlaceData.map((market, index) => (
                    <div className="marketPlace" key={index}>
                        <div className="image">
                            <img src={market.image} alt="" />
                        </div>
                        <div className="name">
                            <h4>{market.name}</h4>
                            <BsThreeDots />
                        </div>
                        <h5 className="username">@asiughuefe</h5>
                        <div className="price-container">
                            <h5 className="price">5.5ETH</h5>
                            <FaEthereum />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Marketplace;

const Section = styled.section`
         display: flex;
         flex-direction: column;
         gap: 5rem;
         margin: 0 6rem;
         margin-bottom: 5rem;
         .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3rem;
            h2 {
              font-size: 2.5rem;
            }
            p {
              color: #7b7e86;
            }
         }
         .marketPlaceTypes {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          button:not(.blue){
            color: #000;
            border-color: #7b7e86;
          }
         }
`;
