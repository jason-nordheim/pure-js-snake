import { getDirection, updateDirection } from "./movement.js"

// private constants 
const DEFAULTS = {
    SNAKE_SPEED: 8, 
    SNAKE_BODY:  [{ x:11, y: 11 }]
}  

// private variables 
let snakeBody = DEFAULTS.SNAKE_BODY
let snakeSpeed =DEFAULTS.SNAKE_SPEED
let newSegments = 0 

// accessors 
export const getSnakeSpeed = () => snakeSpeed 
export const getSnakeBody = () => snakeBody 


export function update(){
    addSegments() 

    updateDirection() 
    for (let i = snakeBody.length - 2; i >=0; i--) {
        // move the elements following the head 
        snakeBody[i + 1] = { ...snakeBody[i] } 
    }

    snakeBody[0].x += getDirection().x
    snakeBody[0].y += getDirection().y 
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount 
}

export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false 
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(getSnakeHead(), {ignoreHead: true})
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]}) 
    }
    newSegments = 0 
}