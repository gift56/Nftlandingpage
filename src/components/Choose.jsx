import React from 'react';
import styled from 'styled-components';
import choose from '../assets/choose.png';

const Choose = () => {
    return (
        <Section>
            <div className="image">
                <img src={choose} alt="choose img" />
            </div>
        </Section>
    )
}

export default Choose;

const Section = styled.section``;