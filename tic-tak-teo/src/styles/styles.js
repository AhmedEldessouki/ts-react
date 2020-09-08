import { css } from '@emotion/core'

export const app = css`
  text-align: center;
  font-family: Serif;
`
export const appHeader = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const btn1Style = css`
  color: whitesmoke;
  background: transparent;
  border: 4.75px solid white;
  font-size: 259%;
  font-family: cursive;
  padding: 0.8%;
  border-radius: 20%;
  width: 42%;
`

export const btn2Board = css`
  width: 100px;
  height: 100px;
  margin: 0;
  padding: 0;
  font-size: 5rem;
  font-weight: bolder;
  border: 2px solid #282c34;
  &:after {
    padding: 0;
    margin: 0;
  }
  &:disabled {
    background-color: black;
  }
`

export const btn2BoardEffect = css`
  @keyframes sample {
    from {
      width: 60px;
      height: 60px;
      margin: 15px;
    }
    to {
      width: 100px;
      height: 100px;
    }
  }

  margin: 0;

  animation: sample 1s ease-out;
`

export const outerWrapper = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  justify-items: center;
  padding-bottom: 30px;
  align-content: 'space-around';
`

export const innerWrapper1 = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  background-color: rgba(70, 149, 255, 0.1);
  padding: 30px;
  height: 240px;
  width: 240px;
  margin: 1.9%;
`

export const innerWrapperBoard = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 1.9%;
`

export const innerWrapperScore = css`
  width: 50%;
  background-color: #282c34;
  padding: 20px 0;
`

export const h1XL = css`
  font-size: 88px;
  margin: 0;
  padding-bottom: 20px;
`

export const h2XL = css`
  font-size: 4rem;
  text-align: center;
  margin: 0;
  width: 100%;
`

export const h2L = css`
  font-size: 38px;
  margin: 0;
  width: 100%;
  font-weight: 500;
`

export const h3L = css`
  margin: 0;
  font-size: 40px;
  font-weight: 400;
`

export const h4L = css`
  margin: 0;
  font-size: 30px;
  font-family: monospace;
  font-weight: 300;
`

export const sPaN = css`
  text-align: center;
  font-size: 7rem;
  margin: 0;
  width: 100%;
`

export const btnGreen = css`
  @keyframes wins {
    from {
      background-color: inherit;
    }
    to {
      background-color: #228b22;
    }
  }

  background-color: #228b22;
  animation: wins 1.5s ease-in-out;
`

export const btnFade = css`
  @keyframes loses {
    from {
      background-color: inherit;
    }
    to {
      background-color: #dfe0e1;
    }
  }
  background-color: #dfe0e1;
  animation: loses 1.5s ease-in-out;
`
