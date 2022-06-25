import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Survey() {

    const { survey_number } = useParams();
    const surveyNumber_int = parseInt(survey_number);
    const previousNumber = surveyNumber_int === 1 ? 1 : surveyNumber_int - 1;
    const nextNumber = surveyNumber_int + 1;


    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {survey_number}</h2>
            <Link to={`/Survey/${previousNumber}`}>Précédent</Link>

            {surveyNumber_int === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (<Link to={`/survey/${nextNumber}`} >Suivant</Link>)}
        </div>
    )
}

export default Survey;