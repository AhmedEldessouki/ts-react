/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'

import App from '../App'

test('App Rendered', () => {
  const { getByText } = render(<App />)
  const titleEl = getByText(/Tic Tac Teo/i)
  expect(titleEl).toBeTruthy()
})
