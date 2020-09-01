/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import PlayGround from '../components/PlayGround'

describe('PlayGround component', () => {
  afterEach(cleanup)

  test('PlayGround works', () => {
    const { getByText } = render(<PlayGround />)
    const titleEL = getByText(/tic tac teo/i)
    expect(titleEL).toBeTruthy()
  })
  test('PlayGround button', () => {
    // const { getByTestId } = render(<PlayGround />);
    const buttonEL = render(<PlayGround />).getByTestId(
      /[data-testId='start']/i
    )
    expect(buttonEL).toBeTruthy()
    fireEvent.click(buttonEL)
    expect(buttonEL).toBeFalsy
  })
})
