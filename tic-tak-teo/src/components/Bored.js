import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import Square from './Square';

export default function Bored({ play }) {
  let [player, setPlayer] = useState(true);
  let [winner, setWinner] = useState({});
  const [xBoxes, setXBoxes] = useState(0);
  const [oBoxes, setOBoxes] = useState(0);
  const [boxes, setBoxes] = useState([
    { locA: '1x1', value: null },
    { locA: '1x2', value: null },
    { locA: '1x3', value: null },
    { locA: '2x1', value: null },
    { locA: '2x2', value: null },
    { locA: '2x3', value: null },
    { locA: '3x1', value: null },
    { locA: '3x2', value: null },
    { locA: '3x3', value: null },
  ]);

  function isWinner(value) {
    let i = 0;
    let checker = [];
    value.map(data => console.log(`isWinner ${data.locA} - ${data.value}`));
    for (let xy = 1; xy <= 3; xy++) {
      for (let yz = 1; yz <= 3; yz++) {
        console.log(i);
        // checker.push(boxes[i].locA: `${boxes[i].value}`);

        // switch (i < 9) {
        //   case 1 <= 8:

        //   default:
        //     console.log(i);

        //     continue;
        // }
        i++;
      }
    }
    console.log(`how do you look? ${checker}`);
  }

  React.useEffect(() => {
    setPlayer(true);
  }, [winner]);

  function onClickHandler(i) {
    if (!boxes[i].value && player) {
      boxes[i].value = 'X';
      isWinner(boxes);
      console.log(boxes[i], player);
      return [boxes[i].value, setPlayer(false)];
    } else if (!boxes[i].value && !player) {
      boxes[i].value = 'O';
      console.log(boxes[i], player);
      return [boxes[i].value, setPlayer(true)];
    } else {
      console.log(boxes);
    }
  }

  return (
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
          id={i}
          type='submit'
          style={{
            width: '100px',
            height: '100px',
            fontSize: '5rem',
            fontWeight: 'bolder',
          }}
          onClick={() => onClickHandler(i)}
        >
          {boxes[i].value}
        </button>
      ))}
    </div>
  );
}

Bored.prototype = {
  player: PropTypes.bool,
  boxes: PropTypes.object,
};
