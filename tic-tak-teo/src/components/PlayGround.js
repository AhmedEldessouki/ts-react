import React from 'react';

import Bored from './Bored';

export default function PlayGround() {
  const [play, setPlay] = React.useState(false);

  return (
    <>
      <h1 style={{ fontSize: '88px', margin: '0', paddingBottom: '20px' }}>
        Tic Tak Teo
      </h1>
      {!play ? (
        <>
          <button
            type='button'
            style={{
              color: 'whitesmoke',
              background: 'transparent',
              border: `4.75px solid white`,
              fontSize: '259%',
              fontFamily: 'cursive',
              padding: '0.8%',
              borderRadius: `20%`,
              width: '42%',
            }}
            onClick={() => setPlay(true)}
          >
            Game Start
          </button>
        </>
      ) : (
        <Bored play={play} />
      )}
    </>
  );
}
