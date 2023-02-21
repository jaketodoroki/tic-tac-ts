"use strict";
//---------Constants---------------
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//-----------Variables------------
let board;
let turn;
let winner;
let tie;
//-------Cached Element References---------
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const resetBtnEl = document.querySelector('#reset-button');
const boardEl = document.querySelector('.board');
//--------Event Listeners--------
resetBtnEl.addEventListener('click', init);
boardEl.addEventListener('click', handleClick);
//--------Functions-----------
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
function render() {
    // updateBoard()
    // updateMessage()
}
function handleClick(evt) {
    if (!(evt.target instanceof HTMLElement))
        return;
    if (evt.target.textContent !== "")
        return;
    if (winner === true || tie === true)
        return;
    let sqIdx = parseInt(evt.target.id.slice(2));
    // placePiece(sqIdx)
    // checkForTie()
    // checkForWinner()
    // switchPlayerTurn()
    render();
}
