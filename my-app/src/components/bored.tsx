import React, { useState } from 'react';

export default function Bored() {
  const [noOfClicks, setNoOfClicks] = useState(0);
  const [winnerX, setWinnerX] = useState(0);
  const [winnerO, setWinnerO] = useState(0);
  const [mrHandler, setMrHandler] = useState({
    turn: 'X',
    player: true,
    isWinner: false,
  });
  const [boxes, setBoxes] = useState(['', '', '', '', '', '', '', '', '']);
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

  function onClickHandler(i: number) {
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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        paddingBottom: '30px',
      }}>
      <div
        style={{
          backgroundColor: `rgba(70,149,255, 0.1)`,
          padding: '30px',
          height: '240px',
          width: '240px',
          margin: '1.9%',
        }}>
        <h1 style={{ fontSize: '4rem', textAlign: 'center', margin: '0' }}>
          Turn
        </h1>
        <h2 style={{ textAlign: 'center', fontSize: '7rem', margin: '0' }}>
          {mrHandler.turn}
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '300px',
          maxHeight: '300px',
          margin: '1.9%',
        }}>
        {boxes.map((data, i) => (
          <button
            key={i}
            type='submit'
            style={{
              minWidth: '100px',
              minHeight: '100px',
              fontSize: '5rem',
              fontWeight: 'bolder',
              margin: '0',
              background:
                data && data === 'X'
                  ? '#282829'
                  : data === 'O'
                  ? 'white'
                  : 'white',
              color: data && data === 'X' ? 'white' : '#282829',
            }}
            onClick={() => onClickHandler(i)}>
            {data}
          </button>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: `row`,
          flexWrap: 'wrap',
          backgroundColor: `rgba(70,149,255, 0.1)`,
          padding: '30px',
          height: '240px',
          width: '240px',
          margin: '1.9%',
          alignContent: 'space-around',
        }}>
        <h1
          style={{
            margin: '0',
            width: '100%',
            fontSize: '48px',
            fontWeight: 500,
          }}>
          Score Bored
        </h1>
        <div
          style={{
            width: '50%',
            backgroundColor: ' #282c34',
            padding: '20px 0',
          }}>
          <h2 style={{ margin: '0', fontSize: '40px', fontWeight: 400 }}>X</h2>
          <h3
            style={{
              margin: '0',
              fontSize: '30px',
              fontFamily: 'monospace',
              fontWeight: 300,
            }}>
            {winnerX}
          </h3>
        </div>
        <div
          style={{
            width: '50%',
            backgroundColor: '#282c34',
            padding: '20px 0',
          }}>
          <h2 style={{ margin: '0', fontSize: '40px', fontWeight: 400 }}>O</h2>
          <h3
            style={{
              margin: '0',
              fontSize: '30px',
              fontFamily: 'monospace',
              fontWeight: 300,
            }}>
            {winnerO}
          </h3>
        </div>
      </div>
    </div>
  );
}
