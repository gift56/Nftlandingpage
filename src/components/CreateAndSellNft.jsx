import React from 'react';
import styled from 'styled-components';
import sell1 from '../assets/sell1.png';
import sell2 from '../assets/sell2.png';
import sell3 from '../assets/sell3.png';
import Buttons from './Buttons';

const CreateAndSellNft = () => {
    const data = [
        {
            image: sell1,
            title: "Create your collection",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum",
            buttonText: "Create"
        },
        {
            image: sell2,
            title: "Add your NFTs",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum",
            buttonText: "Add NFT"
        },
        {
            image: sell3,
            title: "List them for sale",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum",
            buttonText: "Sell Now"
        }
    ]
    return (
        <Section>

        </Section>
    )
}

export default CreateAndSellNft;

const Section = styled.section`


`;

