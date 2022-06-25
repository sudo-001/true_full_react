import React from 'react';

function Card({label, title, picture}) {
    return(
        <div style={{display:"flex", flexDirection:"column", padding: 15}}>
            <span>{label}</span>
            <img src={picture} alt="freelance" width={80}  height={80}/>
            <span>{title}</span>
        </div>
    )
}

export default Card