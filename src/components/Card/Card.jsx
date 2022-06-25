import React from 'react';
import propTypes from 'prop-types';
import defaultPicture from '../../Assets/user.png';

function Card({label, title, picture}) {
    return(
        <div style={{display:"flex", flexDirection:"column", padding: 15}}>
            <span>{label}</span>
            <img src={picture} alt="freelance" width={80}  height={80}/>
            <span>{title}</span>
        </div>
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