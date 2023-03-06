import React from 'react'
import styled from 'styled-components'

const BoxNavegatedStyled = styled.div`
    padding: 0 130px;
    
    nav{
        ul{
            display: flex;
            
            li{
                padding: 10px;
                list-style: none;
                font-weight: bold;

                a{
                    text-decoration: none;
                    color: ${(props) => props.theme.color};
                }
            }
        }
    }

    small{
        padding-left: 10px;
        color: ${(props) => props.theme.fontColor};
    }

    svg{
        font-size: 30px;
        color: ${(props) => props.theme.color};
        margin: 0 15px;
    }
`

export default BoxNavegatedStyled