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
        <div>
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
                    {servicesLinks.map((link)=>(
                        <li key={link}>{link}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Footer;