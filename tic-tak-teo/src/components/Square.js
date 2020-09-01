import React from 'react'

export default function Square({ children, boxID, isDisabled }) {
  return (
    <button
      style={{ width: '100px', height: '100px' }}
      type='submit'
      disabled={isDisabled}>
      {children && children}
    </button>
  )
}
