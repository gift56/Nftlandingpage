import React from 'react';
import styled from 'styled-components';
import { AiFillFacebook } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/Bs';
import { FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/ioS';
import Logo from '../assets/logo.png';

const Footer = () => {
    const servicesLinks = ["Art", "Common", "Trading", "Rare", "Genetic"];
    const companyLinks = ["Home", "About", "Marketplace", "Sellers", "Create"];

    const contactInfo = [
        {
            icon: <MdEmail />,
            value: "efeasiughu@gmail.com"
        },
        {
            icon: <MdPhoneInTalk />,
            value: "+234 123 568 9876"
        },
        {
            icon: <IoLocationSharp />,
            value: "19 Avenue, Lagos Nigeria"
        },
    ];
    const socialIcons = [
        <AiFillFacebook />,
        <FaTwitterSquare />,
        <BsLinkedin />,
        <FaInstagramSquare />
    ]
    return (
        <Container>
            <div className="row">
                <div className="brand">
                    <img src={Logo} alt="logo" />
                </div>
                <p className="description"></p>
            </div>
        </Container>
    )
}

export default Footer;

const Container = styled.container``;
