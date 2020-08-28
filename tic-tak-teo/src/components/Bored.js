import React, { useState } from 'react';

export default function Bored({ play }) {
  const [noOfClicks, setNoOfClicks] = useState(0);
  const [winnerX, setWinnerX] = useState(0);
  const [winnerO, setWinnerO] = useState(0);
  const [mrHandler, setMrHandler] = useState({
    turn: 'X',
    player: true,
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
    winableLines.map(([a, b, c]) => {
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        console.log(`${mrHandler.turn} Wins -- XYZ`);
        setNoOfClicks(noOfClicks * 0);
        if (mrHandler.turn === 'X') {
          setMrHandler({
            ...mrHandler,
            player: true,
          });
          setWinnerX(winnerX + 1);
          return [setBoxes([...Array(9).fill('')])];
        } else {
          setMrHandler({
            ...mrHandler,
            player: false,
          });
          setWinnerO(winnerO + 1);
        }
        return [setBoxes([...Array(9).fill('')])];
      } else if (
        noOfClicks === 8 &&
        boxes[a] &&
        boxes[b] &&
        boxes[c] &&
        boxes[a] !== boxes[b] &&
        boxes[a] !== boxes[c]
      ) {
        setNoOfClicks(noOfClicks * 0);
        return [setBoxes([...Array(9).fill('')])];
      }
    });
  }

  function onClickHandler(i) {
    setNoOfClicks(noOfClicks + 1);
    if (!boxes[i] && mrHandler.player) {
      boxes[i] = 'X';
      console.log(`${i} - ${boxes[i]} and`);
      setMrHandler({ ...mrHandler, player: false, turn: 'O' });
      whoWon();
    } else if (!boxes[i] && !mrHandler.player) {
      boxes[i] = 'O';
      setMrHandler({ ...mrHandler, player: true, turn: 'X' });
      whoWon();
      console.log('after whoWon O  ' + boxes);
    } else {
      throw new Error('Something Went Wrong');
    }
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
        placeItems: 'center',
      }}
    >
      <div>
        <h1 style={{ fontSize: '4rem', textAlign: 'center' }}>Turn</h1>
        <h2 style={{ textAlign: 'center', fontSize: '7rem' }}>
          {mrHandler.turn}
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
        }}
      >
        {boxes.map((data, i) => (
          <button
            key={i}
            type='submit'
            style={{
              width: '100px',
              height: '100px',
              fontSize: '5rem',
              fontWeight: 'bolder',
            }}
            onClick={() => onClickHandler(i)}
          >
            {data}
          </button>
        ))}
      </div>
      <div>
        <h1>Score Bored</h1>
        <ul>
          <li>
            <h2>X</h2>
          </li>
          <li>
            <h3>{winnerX}</h3>
          </li>
        </ul>
        <ul>
          <li>
            <h2>O</h2>
          </li>
          <li>
            <h3>{winnerO}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
