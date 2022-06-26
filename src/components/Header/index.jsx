import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../Assets/dark-logo.png';
import StyledLink from '../../utils/style/Atoms';



const HomeLogo = styled.img`
    height: 70px;
`

const NavStyle = styled.nav`
    
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

function Header() {
    return (
        <NavStyle>
            <Link to="/">
                <HomeLogo src={logo} />
            </Link>

            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/Freelances">Profils</StyledLink>
                <StyledLink to="/Survey/1" $isFullLink>Faire le test</StyledLink>
            </div>
        </NavStyle>
    )
}

export default Header;