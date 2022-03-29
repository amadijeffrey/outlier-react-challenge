import React, { useState,useRef } from 'react'
import ScoreTracker from './scoreTracker'


function Question({ questionNumber, totalNumOfQuestions, selectedQuestion, correctAnswerIndex, showNextQuestion}) {
    const [isCorrect, setIsCorrect] = useState(null)
    const [clicked, setClicked] = useState(false)
    const [numOfQuestionsAnswered, setNumOfQuestionsAnswered] = useState(0)
    const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0)
    const [numOfWrongAnswers, setNumOfWrongAnswers] = useState(0)
    const correctAnswerButton = useRef()

    let result
    if (isCorrect === null) result = ''
    if (isCorrect === true) result = 'Correct!'
    if (isCorrect === false) result = 'Sorry!'

    const category = decodeURIComponent(selectedQuestion.category)
    const decodedQuestion = decodeURIComponent(selectedQuestion.question)
    const numOfDifficultyStars = (questionDifficulty) => {
        let n
        const arr = []
        if (questionDifficulty === 'hard') n = 3
        if (questionDifficulty === 'medium') n = 2
        if (questionDifficulty === 'easy') n = 1

        for (let i = 0; i < n; i++) {
            arr.push(<i key={i} className="bi bi-star-fill"></i>)
        }
        return arr
    }

    const displayOptions = () => {
        const correctAnswer = decodeURIComponent(selectedQuestion.correct_answer)
        const incorrectOptions = selectedQuestion.incorrect_answers.map((option) => {
            const decodedOption = decodeURIComponent(option)
            return <button onClick={(e) => verifyOption(decodedOption, correctAnswer, e, questionNumber, totalNumOfQuestions)} className='button' >
                {decodedOption}
            </button>
        })
        const allOptions = [...incorrectOptions]
        allOptions.splice(correctAnswerIndex, 0, <button ref={correctAnswerButton}
             onClick={(e) => verifyOption(correctAnswer, correctAnswer, e,questionNumber, totalNumOfQuestions)} className='button'>{correctAnswer}</button>)
        
        return allOptions

    }
    const verifyOption = (selectedOption, correctAnswer, e, questionNumber, totalNumOfQuestions) => {
        if (selectedOption === correctAnswer) {
            setIsCorrect(true)
            setNumOfCorrectAnswers(previousState => previousState + 1)

        } else {
            setIsCorrect(false)
            setNumOfWrongAnswers(previousState => previousState + 1)
            correctAnswerButton.current.classList.add('correctAnswer')

        }
        setNumOfQuestionsAnswered(previousState => previousState + 1)
        e.target.classList.add('clicked')
        if(questionNumber === totalNumOfQuestions){
            setClicked(false)
        }else{
            setClicked(true)
        }
        document.querySelectorAll('.button').forEach((button) => {
            button.disabled = true
        })
     
       
    }

    const returnToDefaultState = () => {
        setIsCorrect(null)
        document.querySelectorAll('.button').forEach((button) => {
            button.disabled = false
        })
        setClicked(false)
        correctAnswerButton.current.classList.remove('correctAnswer')
        document.querySelector('.clicked').classList.remove('clicked')
    }

    return (
        <div className='container '>
            <h2>{`Question ${questionNumber} of ${totalNumOfQuestions}`}</h2>
            <h5>{category}</h5>
            <h6>{numOfDifficultyStars(selectedQuestion.difficulty)}</h6>
            <h4>{decodedQuestion}</h4>
            <div className='options'>
                {displayOptions()}
            </div>
            <div className='correct text-center'>
                <h2 className='result'>{result}</h2>
                {clicked && <button onClick={() => {
                    showNextQuestion()
                    returnToDefaultState()
                }} className='next'>
                    Next question
                </button>
                }
            </div>
            <ScoreTracker numOfQuestionsAnswered={numOfQuestionsAnswered}
              numOfCorrectAnswers={numOfCorrectAnswers}
              numOfWrongAnswers={numOfWrongAnswers}
              totalNumOfQuestions={totalNumOfQuestions}/>

        </div>
    )
}

export default Question