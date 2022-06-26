import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import HomeIllustration from '../../Assets/home-illustration.svg'
import StyledLink from '../../utils/style/Atoms';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
`

const HomerContainer = styled.div`
  margin: 10px;
  background-color: ${colors.background};
  padding: 60px 50px;
  display: flex;
  flex-direction: row;
  min-width: 70%;
  max-width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  
  ${StyledLink} {
    max-width: 261px;
    text-align: center;
    margin: inherit;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 80%;
  font-weight: 700;
  font-size: 45px;
  line-height: 160.5%;
  color: #2F2E41;
`

const Illustration = styled.img`
  flex: 1;
`


function Home() {
  return (
    <HomeWrapper>
      <HomerContainer>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomerContainer>
    </HomeWrapper>
  )
}

export default Home;