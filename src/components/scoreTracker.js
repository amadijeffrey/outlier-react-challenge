import React from 'react'

const ScoreTracker = ({ numOfQuestionsAnswered, numOfCorrectAnswers, numOfWrongAnswers, totalNumOfQuestions }) => {
    const leastPossibleScore = ((numOfCorrectAnswers / totalNumOfQuestions) * 100).toFixed(2)
    const currentScore = (numOfQuestionsAnswered === 0) ? 0 : Math.ceil((numOfCorrectAnswers / numOfQuestionsAnswered) * 100)
    const highestPossibleScore = Math.floor(((totalNumOfQuestions - numOfWrongAnswers) / totalNumOfQuestions) * 100)
    return (
        <div className='tracker'>
            <p className='score'><span>{`Score: ${currentScore}%`}</span><span>{`Max Score: ${highestPossibleScore}%`}</span></p>
            <div className="progress">
                <div className="progress-bar leastPossibleScore" role="progressbar" style={{ width: `${leastPossibleScore}%` }}></div>
                <div className="progress-bar currentScore" role="progressbar" style={{ width: `${currentScore - leastPossibleScore}%` }}> </div>
                <div className="progress-bar  highestPossibleScore" role="progressbar" style={{ width: `${highestPossibleScore - currentScore}%` }}></div>
            </div>
        </div>
    )
}


export default ScoreTracker