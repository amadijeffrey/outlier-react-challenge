import React, { useState } from 'react'
import ProgressBar from './components/progressBar'
import Question from './components/question'
import allQuestions from './questions.json'

function Home() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const correctAnswerIndex =  Math.floor(Math.random() * 4)
  const getNewQuestion = () => {
    setQuestionNumber(previousState => previousState + 1)
  
  }

  return (
    <div >
      <ProgressBar questionNumber={questionNumber} 
        totalNumOfQuestions={allQuestions.length} />
      <Question selectedQuestion={allQuestions[questionNumber - 1]}
        totalNumOfQuestions={allQuestions.length}
        questionNumber={questionNumber} 
        correctAnswerIndex={correctAnswerIndex}
        showNextQuestion={() => getNewQuestion()}/>
    </div>
  )
}

export default Home
