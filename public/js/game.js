import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import {
    draw as drawSnake, 
    update as updateSnake, 
    getSnakeHead, 
    getSnakeSpeed, 
    snakeIntersection, 
} from './snake.js'
import { getLastRender, setLastRender, getStatus, setStatus } from './status.js'
import { gameBoard } from './elements.js'

/* Game Loop */ 
function main(currentTime) {
    /* check if game is over */
    if(getStatus().finished){
        setStatus('game over')
        return 
    }

    /* game in progress... */
    const secondsSinceLastRender = (currentTime - getLastRender()) / 1000
    window.requestAnimationFrame(main) /* asks the browser when I can render my next frame */
    
    /* do not re-render if ...*/
    if (secondsSinceLastRender < 1 / getSnakeSpeed()) {
        return 
    }
    
    setLastRender(currentTime) 
    
    update()
    draw()
}


function update(){
    if(getStatus().paused) return 
    updateSnake()
    updateFood() 
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = '' // clear game board before everydraw 
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    if(outsideGrid(getSnakeHead()) || snakeIntersection()){
        setStatus('game over')
    }
}

window.requestAnimationFrame(main)