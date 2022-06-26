import React from 'react';
import propTypes from 'prop-types';
import defaultPicture from '../../Assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';


const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    margin-top: 20px;
`
const CardImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    height: 335px;
    transition: 200ms;
    
    &:hover{
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImg src={picture} alt="freelance" />
            <span>{title}</span>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    picture: propTypes.string.isRequired
}

Card.defaultProps = {
    label: "",
    title: "",
    picture: defaultPicture
}

export default Card