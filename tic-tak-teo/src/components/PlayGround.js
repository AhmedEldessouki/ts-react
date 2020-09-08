/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, Fragment } from 'react'

import { btn1Style, h1XL } from '../styles'

import Bored from './Bored'
import Button from './Button'

export default function PlayGround() {
  const [play, setPlay] = useState(false)
  function handleOnClick() {
    setPlay(true)
  }
  return (
    <Fragment>
      <h1 css={h1XL}>Tic Tak Toe</h1>
      {!play ? (
        <Fragment>
          <Button
            type='button'
            cssMe={btn1Style}
            doThis={handleOnClick}
            nameForTest='startButton'>
            Start Game
          </Button>
        </Fragment>
      ) : (
        <Bored play={play} />
      )}
    </Fragment>
  )
}
