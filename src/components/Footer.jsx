import React from 'react';
import styled from 'styled-components';
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaLocationArrow, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import Logo from '../assets/logo.png';

const Footer = () => {
    const servicesLinks = ["Art", "Common", "Trading", "Rare", "Genetic"];
    const companyLinks = ["Home", "About", "Marketplace", "Sellers", "Create"];

    const contactInfo = [
        {
            icon: < MdEmail />,
            value: "efeasiughu@gmail.com"
        },
        {
            icon: <FaPhoneAlt />,
            value: "+234 123 568 9876"
        },
        {
            icon: <FaLocationArrow />,
            value: "19 Avenue Street, Lagos Nigeria 101229"
        },
    ];
    const socialIcons = [
        <FaFacebook />,
        <FaTwitterSquare />,
        <FaLinkedin />,
        <FaInstagramSquare />
    ]
    return (
        <Container>
            <div className="row">
                <div className="brand">
                    <img src={Logo} alt="logo" />
                </div>
                <p className="description">19 Avenue Street, Lagos Nigeria, 101229</p>
                <div className="social-icons">
                    {socialIcons.map((icon) => (
                        <div className="icon">
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
            <div className="row">
                <h3>Our Service</h3>
                <ul className="list">
                    {servicesLinks.map((link) => (
                        <li key={link}>{link}</li>
                    ))}
                </ul>
            </div>
            <div className="row">
                <h3>Company</h3>
                <ul className="list">
                    {companyLinks.map((link) => (
                        <li key={link}>{link}</li>
                    ))}
                </ul>
            </div>
            <div className="row">
                <h3>Contact Us</h3>
                <ul>
                    {contactInfo.map(({ icon, value }) => (
                        <li>
                            <div className="icon">{icon}</div>
                            <span>{value}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </Container>
    )
}

export default Footer;

const Container = styled.footer`
      background: #443357;
      background: linear-gradient(to right,#443357,#394053);
      display: grid;
      grid-template-columns: repeat(4,1fr);
      padding: 8rem;
      gap: 7rem;
      .row { 
         color: #9ea7ad;
         display: flex;
         flex-direction: column;
         gap: 2rem;
         h3,.description {
            color: #ffffff;
         }
         .social-icons{
            display: flex;
            gap: 1rem;
            .icon{
                border: 1px solid #2d68fd7f;
                padding: 0.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 0.3rem;
                cursor: pointer;
                svg{
                    color: #2d69fd;
                    font-size: 1.5rem;
                }
            }
          }
          ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                display: flex;
                gap: 2rem;
                align-items: center;
            }
          }
        }
`;