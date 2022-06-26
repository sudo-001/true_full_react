import React from 'react';
import Card from '../../components/Card/Card';
import styled from 'styled-components';
import FreelancesProfiles from '../../data/Profiles'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const HeaderStyle = styled.h2`
    font-weight: 700;
    font-size: 30px;
    color: #2F2E41;
    text-align: center;
`

const HeaderDescriptionStyle = styled.h4`
    font-weight: 700;
    color: #8186A0;
    margin-bottom: 30px;
    line-height: 200%;

    
`

const FreelanceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 60px 0px;
`


function Freelances() {

    


    return (
        <FreelanceWrapper>
            <HeaderStyle>Trouvez votre prestataire</HeaderStyle>
            <HeaderDescriptionStyle>Chez FindFreelance nous reunissons les meilleurs profils pour vous.</HeaderDescriptionStyle>
            <CardsContainer>
                {FreelancesProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                        picture={profile.picture}
                    />
                ))}
            </CardsContainer>
        </FreelanceWrapper >
    )
}

export default Freelances;