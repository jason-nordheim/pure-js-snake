
/* Setup Game Loop */ 
function main(currentTime) {
    window.requestAnimationFrame(main) // asks the browser when I can render my next frame 
    console.log(currentTime)
}

window.requestAnimationFrame(main)