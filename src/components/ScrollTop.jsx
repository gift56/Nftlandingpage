import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    window.addEventListener('scroll', () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
    return (
        <div>
            <a href="#scroll" className={`${visible ? "block" : "none"}`}>
                <FaChevronUp />
            </a>
        </div>
    )
}

export default ScrollTop
