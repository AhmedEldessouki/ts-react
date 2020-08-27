import React from 'react';

import Bored from './Bored';

export default function PlayGround() {
  const [play, setPlay] = React.useState(false);

  return (
    <>
      {play ? (
        <button
          type='button'
          style={{
            background: 'dodgerblue',
            color: 'whitesmoke',
            scale: '150%',
          }}
          onClick={() => setPlay(true)}
        >
          Game Start
        </button>
      ) : (
        <Bored play={play} />
      )}
    </>
  );
}
