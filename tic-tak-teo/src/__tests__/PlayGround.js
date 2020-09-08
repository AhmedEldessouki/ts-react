/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import PlayGround from '../components/PlayGround'

describe('PlayGround component', () => {
  afterEach(() => {
    cleanup()
  })

  test('PlayGround works', () => {
    const { getByText } = render(<PlayGround />)
    const titleEL = getByText(/tic tak toe/i)
    expect(titleEL).toBeTruthy()
  })
  test('PlayGround button works and mounts Board Component', () => {
    render(<PlayGround />)

    userEvent.click(screen.getByText(/start game/i))
    // expect(screen.getAllByRole('button')).toHaveLength(9)
    expect(screen.queryByText(/start game/i)).not.toBe()
    expect(screen.getAllByRole('button')).toBeTruthy()
  })
})
