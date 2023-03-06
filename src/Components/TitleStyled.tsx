import React from 'react';
import styled from 'styled-components';

interface TitleStyledProps {
    fontSize: string;
    color?: string;
}

const TitleStyled = styled.h2<TitleStyledProps> `
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color ? props.color : 'inherit'};
`

export default TitleStyled;
