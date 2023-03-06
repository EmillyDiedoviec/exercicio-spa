import React from 'react';
import styled from 'styled-components';

const WrapperIconStyled = styled.section `
    width: 22%;
    text-align: center;
    svg {
        font-size: 60px;
        color: ${(props) => props.theme.color};
        margin-bottom: 10px;
    }
`

export default WrapperIconStyled