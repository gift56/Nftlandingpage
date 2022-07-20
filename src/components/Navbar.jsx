import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.png';
import Buttons from './Buttons';

const Navbar = () => {
    return (
        <Nav>
            <div className="brand">
                <img src={Logo} alt="logo" />
            </div>
            <div className="toggle"></div>
            <div className="links">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#marketplace">Marketplace</a>
                    </li>
                    <li>
                        <a href="#sellers">Sellers</a>
                    </li>
                    <li>
                        <a href="#create">Create</a>
                    </li>
                </ul>
            </div>
            <Buttons text="Contact" />
        </Nav>
    )
}

export default Navbar;


const Nav = styled.nav`

`;
