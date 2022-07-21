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
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolor sit amet",
            buttonText: "Create"
        },
        {
            image: sell2,
            title: "Add your NFTs",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolor sit amet",
            buttonText: "Add NFT"
        },
        {
            image: sell3,
            title: "List them for sale",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolor sit amet",
            buttonText: "Sell Now"
        }
    ]
    return (
        <Section>
            <div className="title">
                <h2>Create and Sell your NFTs</h2>
            </div>
            <div className="container">
                <div className="content">
                    {data.map((item, index) => (
                        <div className="createAndSell" key={index}>
                            <div className="image">
                                <img src={item.image} alt="create and sell" />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <Buttons text={item.buttonText} blue={index === 1} />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default CreateAndSellNft;

const Section = styled.section`
        margin: 0 6rem;
        margin-bottom: 5rem;
        .title{
            text-align: center;
            h2{
                font-size: 2rem;
                margin-bottom: 4rem;
            }
        }
        .container{
            background-color: #232835;
            padding: 5rem;
            border-radius: 1rem;
            .content{
                display: flex;
                gap: 3rem;
                .createAndSell {
                      background-color: #ffffff34;
                      display: flex;
                      flex-direction: column;
                      gap: 1rem;
                      padding: 2rem;
                      border-radius: 1rem;
                      .image {
                          background-color: #2d69fd;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          padding: 1rem;
                          width: fit-content;
                          border-radius: 2rem;
                      }
                }
            }
        }
`;