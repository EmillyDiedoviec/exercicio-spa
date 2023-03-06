import React from 'react';
import styled from "styled-components";

interface BannerProps {
    height: string;
}

const Banner = styled.section<BannerProps>`
    background-image: url(./assets/images/ocean.jpg);
    background-size: cover;
    background-position: center;
    height: ${(props) => props.height};
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 40px;
        color: white;
    }
`

export default Banner