import '@testing-library/jest-dom'

import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import Question from './question'

test('', () => {
    const question = {
        "category": "Entertainment%3A%20Video%20Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In%20Left%204%20Dead%2C%20which%20campaign%20has%20the%20protagonists%20going%20through%20a%20subway%20in%20order%20to%20reach%20a%20hospital%20for%20evacuation%3F",
        "correct_answer": "No%20Mercy",
        "incorrect_answers": [
          "Subway%20Sprint",
          "Hospital%20Havoc",
          "Blood%20Harvest"
        ]
    }

    const getNewQuestion = () => {
        setQuestionNumber(previousState => previousState + 1)
    }

    render(<Question selectedQuestion={question}
        totalNumOfQuestions={20}
        questionNumber={1} 
        correctAnswerIndex={2}
        showNextQuestion={() => getNewQuestion()}/>)

        expect(screen.getByRole('button', {name: /no mercy/i })).toBeEnabled()
        expect(screen.getByTestId('correct')).toHaveTextContent('')
        

        fireEvent.click(screen.getByRole('button', {name: /blood harvest/i }))

        expect(screen.getByRole('button', {name: /no mercy/i })).toHaveAttribute('disabled')
        expect(screen.getByTestId('correct')).toHaveTextContent('Sorry!')
        expect(screen.getByRole('button', {name: /next question/i })).toBeInTheDocument()


        fireEvent.click(screen.getByRole('button', {name: /no mercy/i }))
        expect(screen.getByTestId('correct')).toHaveTextContent('Correct!')


})