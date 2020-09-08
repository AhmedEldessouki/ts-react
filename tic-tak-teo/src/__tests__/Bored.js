/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Bored from '../components/Bored'

afterEach(cleanup)

test('App Rendered', () => {
  const { queryByTestId, getByTestId, getAllByTestId } = render(<Bored />)
  const containerEl = getByTestId(/X|O Bored/i)
  const buttons = [
    'button-0',
    'button-1',
    'button-2',
    'button-3',
    'button-4',
    'button-5',
    'button-6',
    'button-7',
    'button-8',
  ]

  expect(containerEl).toBeTruthy()
  expect(getAllByTestId(...buttons)).toBeTruthy()
  fireEvent.click(queryByTestId(buttons[0]))
  fireEvent.click(queryByTestId(buttons[6]))
})
