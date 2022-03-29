import React from 'react'

const ProgressBar = ({ questionNumber, totalNumOfQuestions }) => {
   const value = (questionNumber / totalNumOfQuestions) * 100
   return (
      <div className="progress">
         <div className="progress-bar questionNumber" role="progressbar" 
            aria-valuemin="0" aria-valuemax={totalNumOfQuestions.toString()} style={{ width: `${value}%` }}>
         </div>
      </div>
   )
}

export default ProgressBar