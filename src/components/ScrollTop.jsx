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

        </div>
    )
}

export default ScrollTop
