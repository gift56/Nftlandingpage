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
    ]
    return (
        <div>

        </div>
    )
}

export default Footer
