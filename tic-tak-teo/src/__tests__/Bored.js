/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Bored from '../components/Bored'

afterEach(cleanup)

test('App Rendered', () => {
  const { queryByTestId, getByTestId, getAllByTestId } = render(<Bored />)
  const containerEl = getByTestId(/X|O Bored/i)
  const buttons = [
    'Square 0',
    'Square 1',
    'Square 2',
    'Square 3',
    'Square 4',
    'Square 5',
    'Square 6',
    'Square 7',
    'Square 8',
  ]

  expect(containerEl).toBeTruthy()
  expect(getAllByTestId(...buttons)).toBeTruthy()
  fireEvent.click(queryByTestId(buttons[0]))
  fireEvent.click(queryByTestId(buttons[6]))
})
