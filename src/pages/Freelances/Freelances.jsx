import React from 'react';
import DefaultPicture from '../../Assets/user.png';
import Card from '../../components/Card/Card';

function Freelances() {

    const freelancesProfiles = [
        {
            name: 'Carick Ymele',
            jobTitle: 'Junior Fullstack developper',
            picture: DefaultPicture,
        },
        {
            name: 'Alfred Douo',
            jobTitle: 'Junior Back-end developper',
            picture: DefaultPicture,
        },
        {
            name: 'Anthony Hugo',
            jobTitle: 'Junior Front-end developpers',
            picture: DefaultPicture,
        }
    ];


    return(
        <div>
            <h1>Page de freelances 🧑‍💻🧑‍💻🧑‍💻</h1>
            {freelancesProfiles.map((profile, index) => (
                <Card 
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    title={profile.name}
                    picture={profile.picture}
                />
            ))}
        </div>
    )
}

export default Freelances;