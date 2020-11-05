import { goUp, goDown, goRight, goLeft } from './movement.js'
import { getStatus, setStatus } from './status.js'

// directional controls 
export const upBtn = document.querySelector('.up-btn')
export const downBtn = document.querySelector('.down-btn')
export const rightBtn = document.querySelector('.right-btn')
export const leftBtn = document.querySelector('.left-btn')

// status controls 
export const pauseButton = document.querySelector('.pause')
export const startBtn = document.querySelector('.start')

// game board 
export const gameBoard = document.querySelector('.game-board')

// setup 
pauseButton.disabled = true 
leftBtn.disabled = true 
rightBtn.disabled = true 
downBtn.disabled = true 
upBtn.disabled = true 

// event listeners 
startBtn.addEventListener('click', () => {
    if (!getStatus().started) {
        setStatus('start')
    } else {
        setStatus('new')
    }
})
pauseButton.addEventListener('click', () => {
    if(getStatus().paused) {
        setStatus('resume')
    } else {
        setStatus('pause')
    }
})

// event listeners 
leftBtn.addEventListener('click', () => goLeft())
rightBtn.addEventListener('click', () => goRight())
downBtn.addEventListener('click', () => goDown())
upBtn.addEventListener('click', () => goUp())

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp': 
            e.preventDefault() 
            return goUp() 
        case 'ArrowDown': 
            e.preventDefault() 
             return goDown() 
        case 'ArrowLeft': 
            e.preventDefault() 
            return goLeft() 
        case 'ArrowRight': 
            e.preventDefault() 
            return goRight() 
    }   
})