
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import {
    SNAKE_SPEED, 
    draw as drawSnake, 
    update as updateSnake, 
    getSnakeHead, 
    snakeIntersection, 
} from './snake.js'
const gameBoard = document.getElementById('game-board')
let lastRenderTime = 0 
let gameOver = false 

/* Setup Game Loop */ 
function main(currentTime) {
    if(gameOver){
        if (confirm('you lost. Press ok to restart')) {
            window.location = '/' // refresh page
        }
        return 
    }

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
    updateFood() 
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = '' // clear game board before everydraw 
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}



window.requestAnimationFrame(main)