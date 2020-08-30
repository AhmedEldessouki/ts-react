/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import {
  outerWrapper,
  innerWrapper1,
  innerWrapperBored,
  innerWrapperScore,
  h2XL,
  h2L,
  h3L,
  h4L,
  sPaN,
  btn2Bored,
} from '../styles';

export default function Bored({ play }) {
  const [noOfClicks, setNoOfClicks] = useState(0);
  const [winnerX, setWinnerX] = useState(0);
  const [winnerO, setWinnerO] = useState(0);
  const [mrHandler, setMrHandler] = useState({
    turn: 'X',
    player: true,
    isWinner: false,
  });
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
  ]);
  const winableLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function whoWon() {
    console.log(`number of click   ${noOfClicks}`);
    winableLines.forEach(([a, b, c]) => {
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        console.log(`${mrHandler.turn} Wins -- XYZ`);
        setNoOfClicks(noOfClicks * 0);
        if (mrHandler.turn === 'X') {
          setMrHandler({
            ...mrHandler,
            isWinner: true,
            player: true,
          });
          setWinnerX(winnerX + 1);
          setBoxes([...Array(9).fill('')]);
        } else {
          setMrHandler({
            ...mrHandler,
            isWinner: true,
            player: false,
          });
          setWinnerO(winnerO + 1);
        }
        setBoxes([...Array(9).fill('')]);
      } else if (
        noOfClicks === 8 &&
        boxes[a] &&
        boxes[b] &&
        boxes[c] &&
        boxes[a] !== boxes[b] &&
        boxes[a] !== boxes[c]
      ) {
        setNoOfClicks(noOfClicks * 0);
        setMrHandler({ ...mrHandler, isWinner: true });
        setBoxes([...Array(9).fill('')]);
      }
    });
  }

  function onClickHandler(i) {
    setNoOfClicks(noOfClicks + 1);
    if (!boxes[i] && mrHandler.player) {
      boxes[i] = 'X';
      console.log(`${i} - ${boxes[i]} and`);
      setMrHandler({ isWinner: false, player: false, turn: 'O' });
      whoWon();
    } else if (!boxes[i] && !mrHandler.player) {
      boxes[i] = 'O';
      setMrHandler({ isWinner: false, player: true, turn: 'X' });
      whoWon();
      console.log('after whoWon O  ' + boxes);
    }
  }
  return (
    <div css={outerWrapper}>
      <div css={innerWrapper1}>
        <h2 css={h2XL}>Turn</h2>
        <span css={sPaN}>{mrHandler.turn}</span>
      </div>
      <div css={innerWrapperBored}>
        {boxes.map((data, i) => (
          <button
            key={i}
            type='submit'
            css={btn2Bored}
            style={{
              background:
                data && data === 'X'
                  ? '#282829'
                  : data === 'O'
                  ? 'white'
                  : 'white',
              color: data && data === 'X' ? 'white' : '#282829',
            }}
            onClick={() => onClickHandler(i)}
          >
            {data}
          </button>
        ))}
      </div>
      <div
        css={innerWrapper1}
        style={{
          display: 'flex',
          flexDirection: `row`,
          flexWrap: 'wrap',
          alignContent: 'space-around',
        }}
      >
        <h2 css={h2L}>Score Bored</h2>
        <div css={innerWrapperScore}>
          <h3 css={h3L}>X</h3>
          <h4 css={h4L}>{winnerX}</h4>
        </div>
        <div css={innerWrapperScore}>
          <h3 css={h3L}>O</h3>
          <h4 css={h4L}>{winnerO}</h4>
        </div>
      </div>
    </div>
  );
}
