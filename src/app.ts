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

//-------Cached Element References---------

const squareEls = document.querySelectorAll<HTMLButtonElement>('.sqr')
const messageEl = document.getElementById('message') as HTMLElement
const resetBtnEl = document.querySelector<HTMLButtonElement>('#reset-button')!
const boardEl = document.querySelector<HTMLDivElement>('.board')!


//--------Event Listeners--------

resetBtnEl.addEventListener('click', init)

boardEl.addEventListener('click', handleClick)


//--------Functions-----------

function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turn = 1
  winner = false
  tie = false
  render()
}

function render() {
  // updateBoard()
  // updateMessage()
}


function handleClick(evt: MouseEvent): void {
  if(!(evt.target instanceof HTMLElement)) return
  if (evt.target.textContent !== "") return
  if(winner === true || tie === true) return
  let sqIdx: number = parseInt(evt.target.id.slice(2))
  // placePiece(sqIdx)
  // checkForTie()
  // checkForWinner()
  // switchPlayerTurn()
  render()
}