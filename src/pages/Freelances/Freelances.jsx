import React from 'react';
import Card from '../../components/Card/Card';
import styled from 'styled-components';
import FreelancesProfiles from '../../data/Profiles'
import { useEffect, useState } from 'react';
import { Loader } from '../../utils/style/Atoms'

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
    const [isProfilsLoading, setProfilsLoading] = useState(false);
    const [profils, setProfils] = useState([]);
    const [isError, setError] = useState(false);

    // Récupérer les profils de freelances sur l'endpoint /freelances
    useEffect(() => {
        setProfilsLoading(true);
        fetch('http://localhost:8000/freelanes')
            .then((response) => response.json())
            .then((freelances) => {
                setProfils(freelances.freelancersList)
                setProfilsLoading(false)
            })
            .catch((err) => setError(true))
    }, [])
    // Utiliser le Loader lorsque le contenu des profils de freelances est en train de charger
    // Afficher les données dans la page
    // Afficher une erreur s'il y a eu un problème

    if(isError === true) {
        return <FreelanceWrapper><HeaderStyle>Oups il y a eu un problème</HeaderStyle></FreelanceWrapper>
    }

    return (
        <FreelanceWrapper>
            
            <HeaderStyle>Trouvez votre prestataire</HeaderStyle>
            <HeaderDescriptionStyle>Chez FindFreelance nous reunissons les meilleurs profils pour vous.</HeaderDescriptionStyle>
            {isProfilsLoading ? (
                <Loader />
            ) : (
                <CardsContainer>
                    {profils.map((profil) => (
                        <Card key={profil.id}
                            label={profil.job}
                            title={profil.name}
                            picture={profil.picture} />
                    ))
                    }
                </CardsContainer>
            )}
        </FreelanceWrapper >
    )
}

export default Freelances;