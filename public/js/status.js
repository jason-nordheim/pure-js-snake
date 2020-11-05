// imports 
import { leftBtn, rightBtn, downBtn, upBtn, startBtn, pauseButton, gameBoard } from './elements.js'
import { randomMove } from './movement.js'

// defaults 
const GAME_FINISHED = false 
const GAME_STARTED = false 
const GAME_PAUSED = false 

// game status 
let status = {
    finished: GAME_FINISHED, 
    started: GAME_STARTED, 
    paused: GAME_PAUSED
} 

export function getStatus() {
    return status 
}

export function setStatus(newStatus) {
    // update the status 
    switch (newStatus) {
        case 'start':
            status.finished = false 
            status.started = true 
            randomMove()
            break 
        case 'pause': 
            status.paused = true 
            break 
        case 'resume': 
            status.paused = false 
            break 
        case 'game over':
            status.finished = true 
            gameBoard.style.border = '2px solid red' 
            break 
        case 'new':
            window.location.reload()  
            break 
    }

    // movement controls 
    leftBtn.disabled = status.paused || status.finished
    rightBtn.disabled = status.paused || status.finished
    downBtn.disabled = status.paused  || status.finished
    upBtn.disabled = status.paused || status.finished

    // game controls 
    startBtn.textContent = status.started ? 'Reset' : 'Start'
    pauseButton.disabled = !status.started || status.finished
    pauseButton.textContent = status.paused ? 'Resume' : 'Pause'
}

let lastRender = 0 
export function setLastRender(time){
    lastRender = time 
}
export function getLastRender(){
    return lastRender
}

