'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const board = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9']
console.log('board is on', board)

const player1 = 'x'

const player2 = 'o'
// determine if playerX has chosen a box
let currentPlayer = player1

// if (condition) {
//    statements1
// } else {
//    statements2
// }

// switch between players
const switchPlayer = function () {
  // if player1 then switch to player2
  if (currentPlayer === player1) {
    currentPlayer = player2
  }
}
//switchPlayer()
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
