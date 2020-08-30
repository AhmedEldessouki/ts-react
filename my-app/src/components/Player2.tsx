import React from 'react';

export default function Player2() {
  function generateMeNumber(max: number): any {
    let min: number = 0;
    let xy: number;
    let myWS = new Set();
    while (max > myWS.size) {
      min = Math.ceil(min);
      max = Math.floor(max);
      xy = Math.floor(Math.random() * 10);
      xy >= 7 ? myWS.add(Math.floor(xy) - 2) : myWS.add(Math.floor(xy));
    }
    return myWS;
  }

  function playerTwo(difficulty: string): any {
    let xyz: Set<unknown>;
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
    switch (difficulty) {
      case 'EASY':
        xyz = generateMeNumber(3);
        for (let x in xyz) {
          console.log(winableLines[parseInt(x)]);
        }
        return console.log('easy', xyz);
      case 'MEDIUM':
        xyz = generateMeNumber(5);
        return console.log('Medium', xyz);
      case 'HARD':
        xyz = generateMeNumber(7);
        return console.dir(xyz);

      default:
        break;
    }
  }

  return <div>{playerTwo('EASY')}</div>;
}
