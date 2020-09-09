/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'

import {
  outerWrapper,
  innerWrapper1,
  innerWrapperBoard,
  innerWrapperScore,
  h2XL,
  h2L,
  h3L,
  h4L,
  sPaN,
  btn2Board,
  btnFade,
  btnGreen,
  btn2BoardEffect,
} from '../styles'

import Button from './Button'

export default function Board() {
  const [noOfClicks, setNoOfClicks] = useState(0)
  const [winnerX, setWinnerX] = useState(0)
  const [winnerO, setWinnerO] = useState(0)
  const [mrHandler, setMrHandler] = useState({
    turn: 'X',
    player: true,
    playEffect: true,
    disableB: false,
  })
  const [boxes, setBoxes] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ])
  const [bg, setBg] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ])
  const winableLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  function whoWon() {
    winableLines.forEach(([a, b, c]) => {
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        setNoOfClicks(noOfClicks * 0)
        setBg([
          ...bg.map((data, i) =>
            i === a
              ? (data = btnGreen)
              : i === b
              ? (data = btnGreen)
              : i === c
              ? (data = btnGreen)
              : (data = btnFade)
          ),
        ])

        if (mrHandler.disableB === false && mrHandler.turn === 'X') {
          setMrHandler({ ...mrHandler, disableB: true })
          setWinnerX(winnerX + 1)

          // execute after Winner Animation
          setTimeout(() => {
            setMrHandler({
              ...mrHandler,
              player: true,
              disableB: false,
            })
            setBoxes([...Array(9).fill('')])
          }, 1500)
        } else if (mrHandler.turn === 'O' && mrHandler.disableB === false) {
          setMrHandler({ ...mrHandler, disableB: true })
          setWinnerO(winnerO + 1)

          // execute after Winner Animation
          setTimeout(() => {
            setMrHandler({
              ...mrHandler,
              player: false,
              disableB: false,
            })
            setBoxes([...Array(9).fill('')])
          }, 1500)
        }
      } else if (
        noOfClicks === 8 &&
        mrHandler.disableB === false &&
        boxes[a] &&
        boxes[b] &&
        boxes[c] &&
        boxes[a] !== boxes[b] &&
        boxes[a] !== boxes[c]
      ) {
        setBg([...Array(9).fill(btnGreen)])
        setMrHandler({ ...mrHandler, disableB: true })

        // execute after Winner Animation
        setTimeout(() => {
          setNoOfClicks(noOfClicks * 0)
          setBoxes([...Array(9).fill('')])
          setMrHandler({
            ...mrHandler,
            disableB: false,
          })
        }, 1500)
      }
    })
  }

  function onClickHandler(i) {
    setMrHandler({ ...mrHandler, disableB: true })
    setNoOfClicks(noOfClicks + 1)
    setBg([...Array(9).fill(null)])
    if (!boxes[i] && mrHandler.player) {
      boxes[i] = 'X'
      setMrHandler({
        playEffect: false,
        player: false,
        turn: 'O',
        disableB: false,
      })
      whoWon()
    } else if (!boxes[i] && !mrHandler.player) {
      boxes[i] = 'O'
      setMrHandler({
        playEffect: false,
        player: true,
        turn: 'X',
        disableB: false,
      })
      whoWon()
    } else {
      setMrHandler({ ...mrHandler, disableB: false })
      whoWon()
    }
  }
  return (
    <div css={outerWrapper}>
      <div css={innerWrapper1}>
        <h2 css={h2XL}>Turn</h2>
        <span css={sPaN} data-testid='turnNotify'>
          {mrHandler.turn}
        </span>
      </div>
      <div css={innerWrapperBoard}>
        {boxes.map((data, i) => (
          <Button
            key={i}
            cssMe={[
              btn2Board,
              bg[i],
              mrHandler.playEffect ? btn2BoardEffect : '',
            ]}
            styleMe={{
              background:
                data && data === 'X'
                  ? '#282829'
                  : data === 'O'
                  ? 'white'
                  : 'white',
              color: data && data === 'X' ? 'white' : '#282829',
            }}
            doThis={() => onClickHandler(i)}
            disabledB={mrHandler.disableB}
            nameForTest={`button-${i}`}>
            {data}
          </Button>
        ))}
      </div>
      <div
        css={innerWrapper1}
        style={{
          display: 'flex',
          flexDirection: `row`,
          flexWrap: 'wrap',
          alignContent: 'space-around',
        }}>
        <h2 css={h2L}>Score Board</h2>
        <div css={innerWrapperScore}>
          <h3 css={h3L}>X</h3>
          <h4 data-testid='X-wins' css={h4L}>
            {winnerX}
          </h4>
        </div>
        <div css={innerWrapperScore}>
          <h3 css={h3L}>O</h3>
          <h4 data-testid='O-wins' css={h4L}>
            {winnerO}
          </h4>
        </div>
      </div>
    </div>
  )
}
