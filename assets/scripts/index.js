'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// $(function () {
console.log('document ready')

// $('.box').on('click', function () {
//   console.log('box clicked')
//   // while occupied - prevent click event
//   $('div.box').text(currentPlayer)
//   // create function to change box to X/O, pass through currentPlayer outcome
//   // create condtion to keep box clicked until reset for new game
// })
// $('div.box').text(currentPlayer)

const board = ['', '', '', '', '', '', '', '', '']
console.log('board is on', board)

const player1 = 'X'
// console.log('player is ', player1)
const player2 = 'O'
// determine if playerX had chosen a box
let currentPlayer = player1
console.log('currentPlayer is', currentPlayer)

const switchPlayer = function () {
  // if player1 then switch to player2
  if (currentPlayer === player1) {
    currentPlayer = player2
  } else {
    currentPlayer = player1
  }
  console.log('changed to ', currentPlayer)
}

// if this box is occupied then don't allow 'click'
// else run this code



// on the click event .box listening for click event targeting the specific box
$('.box').on('click', function (event) {
  console.log('box clicked')
  console.log(event.target)

  $(event.target).text(currentPlayer)
  // invoking function to switchPlayer after box is selected
  switchPlayer()
})

// // cannot choose occupied spots
// const occupiedSquares = function () {
//   for (let i = 0; i < board.length; i++) {
//     // board[i] === 'x' || 'o'
//     // figure out what to assign it to or what function to call
//   }
// }
// })

const getWinner = function () {
  if (board[1] === board[2] && board[2] === board[3]) {
    return (currentPlayer + ' is the winner!')
    console.log(' is the winner')
  }
}
console.log('board is on', board)
// beginning of copied code
// const board = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9']
// console.log('board is on', board)
//
// const player1 = 'x'
// console.log('player is ', player1)
// const player2 = 'o'
// // determine if playerX has chosen a box
// let currentPlayer = player1
// console.log('currentPlayer is', currentPlayer)

// if (condition) {
//    statements1
// } else {
//    statements2
// }

// // switch between players
// const switchPlayer = function () {
//   // if player1 then switch to player2
//   if (currentPlayer === player1) {
//     currentPlayer = player2
//   } else {
//     currentPlayer = player1
//   }
//   console.log('changed to ', currentPlayer)
// }
//
// // cannot choose occupied spots
// const occupiedSquares = function () {
//   for (let i = 0; i < board.length; i++) {
//     board[i] === 'x' || 'o'
//     // figure out what to assign it to or what function to call
//   }
// }

// end of old code

// if (board[i] === 'x' || 'o') {
//   board[i] = 'occupied'// not allowing square [x] to be chosen (on.something?)
// }

// if something(board index [i]?) === 'x' || 'o' then don't allow that square to be chosen

//  -a switchPlayer

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
