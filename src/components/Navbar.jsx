import React, { useState } from 'react'
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png';
import Buttons from './Buttons';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click", (e) => setIsNavOpen(false));
    return (
        <Nav state={isNavOpen ? 1 : 0}>
            <div className="brand">
                <img src={Logo} alt="logo" />
            </div>
            <div className="toggle">
                {isNavOpen ? (
                    <FaTimes onClick={() => setIsNavOpen(false)} />
                ) : (
                    <FaBars onClick={(e) => {
                        e.stopPropagation();
                        setIsNavOpen(true)
                    }} />
                )}
            </div>
            <div className={`links ${isNavOpen ? "show" : ""}`}>
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 2rem;
      .toggle {
           display: none;
      }
      .links {
        display: flex;
        height: 4rem;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
        padding: 2.5rem 8rem;

        ul {
            display: flex;
            list-style-type: none;
            gap: 3rem;
            li {
                a {
                    text-decoration: none;
                    color: #002000;
                    transition: all 0.4s ease-in-out;
                    &:hover {
                        color: #2d69fd;
                    }
                }
            }
        }
      }
`;
