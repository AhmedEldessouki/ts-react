/** @jsx jsx */
import { jsx } from '@emotion/core'

import PlayGround from './components/PlayGround'
import { app, appHeader } from './styles'

function App() {
  return (
    <div css={app}>
      <header css={appHeader}>
        <PlayGround />
      </header>
    </div>
  )
}

export default App
