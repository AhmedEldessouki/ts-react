/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, Fragment } from 'react';

import Bored from './Bored';
import { btn1Style, h1XL } from '../styles';

export default function PlayGround() {
  const [play, setPlay] = useState(false);

  return (
    <Fragment>
      <h1 css={h1XL}>Tic Tak Teo</h1>
      {!play ? (
        <button type='button' css={btn1Style} onClick={() => setPlay(true)}>
          Game Start
        </button>
      ) : (
        <Bored play={play} />
      )}
    </Fragment>
  );
}
