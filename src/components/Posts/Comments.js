import React from 'react'
import styled from 'styled-components'
import CommentsIMG from "../../images/Comments"

const Count = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 14px;
`

const Info = styled.div`
    display:flex;
    align-items: center;
    border: 1px solid #EDEFF1;
    padding: 0em 0.5em;
    height: 3vh;
    border-radius: 15px;
    color: grey;
    font-size: 15px;
    ${Count}:not(:first-child) {
        margin-left: 0.3em;
        margin-right: 0.3em;
    }
`

export const Comments = ({commentsCount}) => {
  return (
    <Info>
        <CommentsIMG color="grey" />
        <Count>{commentsCount}</Count>
    </Info>
  )
}