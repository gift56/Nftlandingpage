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
   @media screen and (max-width: 1080px){
         position: relative;
         padding: 1rem 2rem;
         z-index: 999;
         margin: 0;
         button{
            display: none;
         }
         .account-info{
            display: none;
         }
         .brand{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
         }
         .toggle{
            padding-right: 1rem;
            display: block;
            z-index: 51;
            svg{
                color: #2d69fd;
            }
         }
         .show{
            opacity: 1 !important;
            visibility: visible !important;
         }
         .links{
            z-index: 50;
            position: absolute;
            overflow-x: hidden;
            top: 0;
            right: 0;
            width: ${({ state }) => (state ? "60%" : "0%")};
            height: 100vh;
            background-color:#ffffff;
            opacity: 0;
            visibility: hidden;
            transition: all .7s ease-in-out;
         }
   }
`;
