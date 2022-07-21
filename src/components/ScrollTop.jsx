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
`;
