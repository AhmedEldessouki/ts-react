/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Board from '../components/Board'

describe('testing Board Component', () => {
  afterEach(() => {
    cleanup()
  })

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
  test('Start Game as X and Win', () => {
    render(<Board />)
    // eslint-disable-next-line jest-dom/prefer-empty
    expect(screen.queryByTestId(buttons[0]).innerHTML).toBe('')

    buttons.forEach((data, i) => {
      userEvent.click(screen.queryByTestId(data))
      if (i === 7) {
        expect(screen.queryByTestId(data, { disabled: true })).toBeTruthy()
        expect(screen.getByTestId('X-wins').innerHTML).toBe('1')
        expect(screen.getByTestId('O-wins').innerHTML).toBe('0')
      } else if (i === 8) {
        expect(screen.queryByTestId(data, { disabled: true })).toBeTruthy()
      } else if (i % 2 === 0) {
        expect(screen.queryByTestId(data).innerHTML).toBe('X')
      } else if (i % 2 !== 0) {
        expect(screen.queryByTestId(data).innerHTML).toBe('O')
      }
    })
  })

  test('X starts but O wins', () => {
    render(<Board />)

    userEvent.click(screen.queryByTestId(buttons[0]))
    expect(screen.queryByTestId(buttons[0]).innerHTML).toBe('X')

    userEvent.click(screen.queryByTestId(buttons[2]))
    expect(screen.queryByTestId(buttons[2]).innerHTML).toBe('O')

    userEvent.click(screen.queryByTestId(buttons[1]))
    expect(screen.queryByTestId(buttons[1]).innerHTML).toBe('X')

    userEvent.click(screen.queryByTestId(buttons[4]))
    expect(screen.queryByTestId(buttons[4]).innerHTML).toBe('O')

    userEvent.click(screen.queryByTestId(buttons[5]))
    expect(screen.queryByTestId(buttons[5]).innerHTML).toBe('X')

    userEvent.click(screen.queryByTestId(buttons[6]))
    expect(screen.queryByTestId(buttons[6]).innerHTML).toBe('O')

    expect(screen.getByTestId('O-wins').innerHTML).toBe('1')
    expect(screen.getByTestId('X-wins').innerHTML).toBe('0')
  })
})
