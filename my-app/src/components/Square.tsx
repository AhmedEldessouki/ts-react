import React, { useState, useEffect, useRef } from 'react';

export default function Square() {
  // const [player1, setPlayer1] = useState({
  //   turn: true,
  //   value: 'X'
  // });
  // const [player2, setPlayer2] = useState({
  //   turn: false,
  //   value: 'O'
  // });
  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);
  const [player, setPlayer] = useState(false);
  const valueSet = ['', '', '', '', '', '', '', '', ''];
  let newArray: any = {
    box0: '',
    box1: '',
    box2: '',
    box3: '',
    box4: '',
    box5: '',
    box6: '',
    box7: '',
    box8: '',
  };

  // useEffect(() => {

  //   return handleClick;
  // }, [player2, player1]);
  const myRef = useRef();

  function newGame() {
    console.log(valueSet);
    return setPlayer(true);
  }

  function printMeThis(valueSet: any) {
    for (const item of valueSet) {
      return (
        <button onMouseDown={handleClick(item)} type='button'>
          {item}
        </button>
      );
    }
  }
  function handleClick(value: string): any {
    console.log('CLICK');
    // document.querySelector('button').preventDefault();
    // const [player, setPlayer] = useState(player1 || player2);

    if (player1 !== player2) {
      value = 'X';
      setPlayer1(!player1);
      return value;
    } else {
      value = 'O';
      setPlayer2(!player2);
      return value;
    }
  }
  // function handleOnMouseDown(key: number): void {
  //   if (player1) {
  //     valueSet[key] = 'X';
  //   } else {
  //     valueSet[key] = 'O';
  //   }
  //   return valueSet;
  // }
  function setPlayGround(value: string, idx: number, valueSet: any[]) {
    return idx <= 8 ? (
      <button
        key={idx}
        onClick={e => e.preventDefault()}
        // onMouseDown={() => {
        //   console.log('click');
        // }}
        onMouseDown={() => {
          console.log('click');
          console.log(player1);
          console.log(valueSet.length);
          player1
            ? (newArray = { idx: 'X', ...newArray })
            : (newArray = { idx: 'O', ...newArray });
        }}
        onMouseUp={() => setPlayer1(!player1)}
        style={{ height: '100px', width: '100px' }}>
        {newArray}
      </button>
    ) : null;
  }
  return (
    <div>
      {player ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '300px' }}>
          {valueSet.map(setPlayGround)}
          {/* {printMeThis} */}
        </div>
      ) : (
        <button onClick={newGame} type='button'>
          Start new game
        </button>
      )}
    </div>
    // <></>
  );
}
