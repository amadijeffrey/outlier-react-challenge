import '@testing-library/jest-dom'

import React from 'react'
import { render, screen} from '@testing-library/react'
import ScoreTracker from './scoreTracker'

test('scoretracker should be in the dom', () => {
    render(<ScoreTracker />)

    const ScoretrackerElement = screen.getByTestId('1')
    expect(ScoretrackerElement).toBeInTheDocument()
})

test('scoretracker should display 55% if one fails 9 questions', () => {
    render(<ScoreTracker numOfQuestionsAnswered={20} numOfCorrectAnswers={11} numOfWrongAnswers={9} totalNumOfQuestions={20} />)

    const ScoretrackerElement = screen.getByTestId('score')
    expect(ScoretrackerElement).toHaveTextContent(55)

})