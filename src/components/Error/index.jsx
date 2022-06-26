import React from 'react';
import styled from 'styled-components';
import NotFoundImg from '../../Assets/404.svg';
import colors from '../../utils/style/colors';

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: solid green;
    position: relative;
    
`

const TitleStyle = styled.h2`
    // border: solid red;
    color: ${colors.thirt};
    font-weight: 700;
    font-size: 25px;
`
const ErrorImg = styled.img`
    // border: solid red;
    padding: 10px;
    height: 450px;
`

function Error() {
    return (
        <ErrorWrapper>
            <TitleStyle>Oups...</TitleStyle>
            <ErrorImg src={NotFoundImg } />

            <TitleStyle>Il semblerait qu'il y ait un problème</TitleStyle>
        </ErrorWrapper>
    )
}

export default Error;