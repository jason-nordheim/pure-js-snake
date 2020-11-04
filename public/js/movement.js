import { getStatus, setStatus } from "./status.js"

// public constants 
export const STATIONARY = {x: 0, y: 0 }

export const direction = [STATIONARY, STATIONARY]

// private constants 
export const DIRECTIONS = {
    UP: { x: 0, y: -1 }, 
    DOWN: { x: 0, y: 1 }, 
    LEFT: { x: -1, y: 0 }, 
    RIGHT: { x: 1, y: 0 } 
}   

export function goUp(){
    // bail if game isn't started 
    if (!getStatus().started) return 
    else if (direction[1].y !== 0) return  
    else setDirection(DIRECTIONS.UP) 
}
export function goDown(){
    // bail if game isn't started 
    if (!getStatus().started) return 
    else if (direction[1].y !== 0) return  
    else setDirection(DIRECTIONS.DOWN)
}
export function goRight(){
    // bail if game isn't started 
    if (!getStatus().started) return 
    else if (direction[1].x !== 0) return 
    else setDirection(DIRECTIONS.RIGHT)
}
export function goLeft(){
    // bail if game isn't started 
    if (!getStatus().started) return 
    else if (direction[1].x !== 0) return  
    else setDirection(DIRECTIONS.LEFT)
}
export function randomMove(){
    setStatus('started')
    setDirection(getRandomDirection())
    updateDirection() 
}

function getRandomDirection() {
    const dirs = Object.keys(DIRECTIONS) 
    const randDir = dirs[Math.floor(Math.random() * dirs.length)] 
    return DIRECTIONS[randDir]
}
export function setDirection(newDirection){
    direction[0] = newDirection
}
export function updateDirection(){
    direction[1] = direction[0]
}
export function getDirection(){
    return direction[0] 
}

