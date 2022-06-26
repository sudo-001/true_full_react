import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from './colors'


const StyledLink = styled(Link)`
    padding: 15px;
    margin: 0 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) => props.$isFullLink && `
        color:white;
        border-radius: 30px;
        background-color: ${colors.primary};
    `}
`

export default StyledLink