import {
    SNAKE_SPEED, 
    draw as drawSnake, 
    update as updateSnake, 
} from './snake.js'

const gameBoard = document.getElementById('game-board')
let lastRenderTime = 0 

/* Setup Game Loop */ 
function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main) /* asks the browser when I can render my next frame */
    
    /* do not re-render if ...*/
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 
    
    lastRenderTime = currentTime
    
    update()
    draw()
}

function update(){
    updateSnake()
}

function draw(){
    gameBoard.innerHTML = '' // clear game board before everydraw 
    drawSnake(gameBoard)
}

window.requestAnimationFrame(main)