//---------Constants---------------

const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

//-----------Variables------------

let board: number[]
let turn: number
let winner: boolean
let tie: boolean

//-------Cached Element References----

const squareEls = document.querySelectorAll<HTMLButtonElement>('.sqr')
const messageEl = document.getElementById('message') as HTMLElement
const resetBtnEl = document.querySelector<HTMLButtonElement>('#reset-button')!