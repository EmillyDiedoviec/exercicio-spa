import React from 'react'
import styled from 'styled-components'

const WrapperFooterStyled = styled.footer`
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.backgroundColor};
`

export default WrapperFooterStyled