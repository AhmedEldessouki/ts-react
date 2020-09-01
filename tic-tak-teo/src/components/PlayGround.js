/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, Fragment } from 'react'

import { btn1Style, h1XL } from '../styles'

import Bored from './Bored'

export default function PlayGround() {
  const [play, setPlay] = useState(false)

  return (
    <Fragment>
      <h1 css={h1XL}>Tic Tac Teo</h1>
      {!play ? (
        <button
          type='button'
          data-testid='start'
          css={btn1Style}
          onClick={() => setPlay(true)}>
          Game Start
        </button>
      ) : (
        <Bored play={play} />
      )}
    </Fragment>
  )
}
