import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

function Survey() {
  // const { survey_number.survey_number } = useParams();
  const survey_number = useParams();
  console.log(survey_number.survey_number)
  const questionNumberInt = parseInt(survey_number.survey_number)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [questions, setQuestions] = useState({});
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    setDataLoading(true)
    fetch('http://localhost:8000/survey')
      .then((response) => response.json())
      .then(({ surveyData }) => {
        setQuestions({ ...surveyData })
        setDataLoading(false)
      }
      )
      .catch((error) => console.log(error))
  }, [])
  console.log(questions)
  return (
    <SurveyContainer>
      <QuestionTitle>Question {survey_number.survey_number}</QuestionTitle>
      {
        isDataLoading ? (
          <Loader />  
        ) : (
        <QuestionContent>{questions[questionNumberInt]}   </QuestionContent>
        )
      }
      <LinkWrapper>
        {questions[questionNumberInt - 1] ? (
          <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        ) : ''}
        {questions[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey