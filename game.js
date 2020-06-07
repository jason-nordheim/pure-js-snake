let lastRenderTime = 0 
const SNAKE_SPEED = 2 /* Number of times to move per second */

/* Setup Game Loop */ 
function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main) /* asks the browser when I can render my next frame */
    
    /* do not re-render if ...*/
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 
    
    lastRenderTime = currentTime
    console.log(secondsSinceLastRender)
    
    update()
    draw()
}

function update(){

}

function draw(){
    
}

window.requestAnimationFrame(main)