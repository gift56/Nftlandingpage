import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    window.addEventListener('scroll', () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
    return (
        <Div>
            <a href="#scroll" className={`${visible ? "block" : "none"}`}>
                <FaChevronUp />
            </a>
        </Div>
    )
}

export default ScrollTop;

const Div = styled.div`
    max-width: 100vw;
    .none{
        opacity: 0;
        visibility: hidden;
    }
    a{
        position: fixed;
        bottom: 40px;
        right: 40px;
        background-color: #2d69fd;
        padding: 1rem;
        border-radius: 100%;
    }
`;
