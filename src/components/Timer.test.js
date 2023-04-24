import '@testing-library/jest-dom'

import React from 'react'
import { render, screen} from '@testing-library/react'
import Timer from './Timer'

test('display timer when loaded', () => {
    render(<Timer />)

    const TimerElement = screen.getByTestId('minutesleft')
    expect(TimerElement).toBeInTheDocument()
})

