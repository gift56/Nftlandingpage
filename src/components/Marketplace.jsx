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

        </Section>
    )
}

export default Marketplace;

const Section = styled.section`

`;
