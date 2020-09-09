/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup, screen, rerender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  toBeEmpty,
  toBeEnabled,
  toHaveFocus,
  toHaveAttribute,
  toHaveClass,
  toHaveStyle,
  toBeDisabled,
} from '@testing-library/jest-dom'

import Board from '../components/Board'

expect.extend({
  toBeEmpty,
  toBeEnabled,
  toHaveFocus,
  toHaveAttribute,
  toHaveClass,
  toHaveStyle,
  toBeDisabled,
})

describe('testing Board Component', () => {
  beforeEach(() => {
    render(<Board />)
    jest.useFakeTimers()
  })
  afterEach(() => {
    cleanup()
    jest.useFakeTimers()
  })

  const buttons = [
    /button-0/i,
    /button-1/i,
    /button-2/i,
    /button-3/i,
    /button-4/i,
    /button-5/i,
    /button-6/i,
    /button-7/i,
    /button-8/i,
  ]
  describe('Testing each button to have a value of X and for the Turn to change from X to O', () => {
    buttons.forEach(data => {
      test(`Test button ${data} functionality`, () => {
        expect(screen.queryByTestId(data)).toBeEmpty()
        expect(screen.queryByTestId(data)).toBeEnabled()
        expect(screen.queryByTestId(data)).toHaveStyle(`background: white`)
        expect(screen.queryByTestId(data)).toHaveStyle(`color: rgb(40, 40, 41)`)
        expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('X')
        userEvent.click(screen.queryByTestId(data))
        expect(screen.queryByTestId(data)).toHaveFocus()
        expect(screen.queryByTestId(data)).toHaveAttribute('type', 'button')
        expect(screen.queryByTestId(data).innerHTML).toBe('X')
        expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('O')
        expect(setTimeout).toHaveBeenCalledTimes(1)
      })
    })
  })

  test('Start Game as X and Wins. After Every click check Turn Notifier. Check the Winner start first and check Score on Score Board. Check button is disabled after the win.', () => {
    // eslint-disable-next-line jest-dom/prefer-empty
    expect(screen.queryByTestId(buttons[0]).innerHTML).toBe('')

    buttons.forEach((data, i) => {
      userEvent.click(screen.queryByTestId(data))
      if (i === 7) {
        expect(screen.queryByTestId(data, { disabled: true })).toBeTruthy()
        expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('X')
        expect(screen.getByTestId('X-wins').innerHTML).toBe('1')
        expect(screen.getByTestId('O-wins').innerHTML).toBe('0')
        expect(setTimeout).toHaveBeenCalledTimes(2)
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500)
      } else if (i === 8) {
        expect(screen.queryByTestId(data)).toBeDisabled()
      } else if (i % 2 === 0) {
        expect(screen.queryByTestId(data).innerHTML).toBe('X')
        if (i !== 6) {
          // when X wins!!
          expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('O')
          // css animation duration!
          expect(setTimeout).toHaveBeenCalledTimes(1)
        } else {
          expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('X')
        }
      } else if (i % 2 !== 0) {
        expect(screen.queryByTestId(data).innerHTML).toBe('O')
        expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('X')
      }
    })
  })

  test('X starts but O wins. After Every click check Turn Notifier. Check the Winner start first and check Score on Score Board. Check button is disabled after the win.', () => {
    userEvent.click(screen.queryByTestId(buttons[0]))
    expect(screen.queryByTestId(buttons[0]).innerHTML).toBe('X')
    expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('O')

    userEvent.click(screen.queryByTestId(buttons[2]))
    expect(screen.queryByTestId(buttons[2]).innerHTML).toBe('O')
    expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('X')

    userEvent.click(screen.queryByTestId(buttons[1]))
    expect(screen.queryByTestId(buttons[1]).innerHTML).toBe('X')
    expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('O')

    userEvent.click(screen.queryByTestId(buttons[4]))
    expect(screen.queryByTestId(buttons[4]).innerHTML).toBe('O')
    expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('X')

    userEvent.click(screen.queryByTestId(buttons[5]))
    expect(screen.queryByTestId(buttons[5]).innerHTML).toBe('X')
    expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('O')

    userEvent.click(screen.queryByTestId(buttons[6]))
    expect(screen.queryByTestId(buttons[6]).innerHTML).toBe('O')
    expect(screen.queryByTestId(/turnNotify/i).innerHTML).toBe('O')
    expect(screen.queryByTestId(buttons[6])).toBeDisabled()

    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500)

    expect(screen.getByTestId('O-wins').innerHTML).toBe('1')
    expect(screen.getByTestId('X-wins').innerHTML).toBe('0')
  })
})
