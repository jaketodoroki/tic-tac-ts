//---------Constants---------------

const winningCombos: number [][] = [
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

const squareEls = document.querySelectorAll<HTMLDivElement>('.sqr')
const messageEl = document.getElementById('message') as HTMLElement
const resetBtnEl = document.getElementById('reset') as HTMLButtonElement
const boardEl = document.querySelector<HTMLElement>('.board')!


//--------Event Listeners--------
init()
boardEl.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)

// squareEls.forEach(square => square.addEventListener('click', handleClick))

//--------Functions-----------

function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  turn = 1;
  winner = false;
  tie = false;
  render()
}

function render(): void {
  updateBoard()
  updateMessage()
}

function updateMessage(): void {
  if(!winner && !tie) {
    messageEl!.textContent = `It's ${turn === 1 ? 'O':'X'}'s turn`
  } else if (!winner && tie ) {
    messageEl!.textContent = 'TIE'
  } else {
    messageEl!.textContent = `Congrats! ${turn === 1 ? 'O':'X'} wins!!`
  } 
}

function updateBoard(){
  squareEls.forEach((square, idx) => {
    if(board[idx] === 1) {
      square.textContent = "O"
    } else if (board[idx] === -1) {
      square.textContent = "X"
    } else if (board[idx] === 0) {
      square.textContent = ""
    }
  })
}


function handleClick(evt: MouseEvent): void {
  if(!(evt.target instanceof HTMLElement)) return
  if (evt.target.textContent !== "") return
  if (winner === true || tie === true) return
  let sqIdx: number = parseInt(evt.target.id.slice(2))
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function checkForTie(): void {
  if (!board.includes(0)) {
    tie = true
  }
}

function placePiece(idx: number): void {
  board[idx] = turn
}

function switchPlayerTurn(): void {
  if(winner === true || tie === true) return
  turn *= -1
}

function checkForWinner(): void {
  winningCombos.forEach(combo => {
    let total: number = 0
    combo.forEach(position => {
      total += board[position]
      if (Math.abs(total) === 3) {
        winner = true
        return
      }
    })
  })
}