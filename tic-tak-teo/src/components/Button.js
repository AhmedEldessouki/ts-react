/**@jsx jsx */
import { jsx } from '@emotion/core';

function Button({ children, doThis, styleMe, cssMe }) {
  const audioEl = new Audio('/onCLICK.mp3');

  return (
    <button
      type='button'
      css={cssMe}
      style={styleMe}
      onClick={doThis}
      onMouseDown={() => {
        audioEl.play();
      }}
    >
      {children && children}
    </button>
  );
}

export default Button;
