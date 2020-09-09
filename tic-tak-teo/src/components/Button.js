/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

/**
 *
 * @param {Function} doThis  - Function to handle onClick
 * @param {Object} styleMe - Button inline style
 * @param {import('@emotion/core').SerializedStyles} cssMe - Button css for emotion/core
 * @param {Boolean} disabledB - Button Disabled
 * @param {String} nameForTest - Test-id
 */
function Button({ children, doThis, styleMe, cssMe, disabledB, nameForTest }) {
  // const audioEl = new Audio('/onCLICK.mp3')

  return (
    <button
      type='button'
      css={cssMe}
      style={styleMe}
      onClick={doThis}
      // onMouseDown={() => {
      //   audioEl.play()
      // }}
      disabled={disabledB}
      data-testid={nameForTest}>
      {children && children}
    </button>
  )
}

Button.defaultProps = {
  styleMe: null,
  disabledB: false,
  nameForTest: null,
  children: 'button',
}

Button.propTypes = {
  children: PropTypes.node,
  doThis: PropTypes.func.isRequired,
  styleMe: PropTypes.object,
  cssMe: PropTypes.any.isRequired,
  disabledB: PropTypes.bool,
  nameForTest: PropTypes.string,
}

export default Button
