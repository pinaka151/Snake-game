

//  Main logic starts Here


let hiscore = localStorage.getItem("hiscore");
if (hiscore === null) {
    hiscoreval = 0;
    localStorage.setItem( "hiscore", JSON.stringify(hiscoreval))
}

else{
   hiscoreval = JSON.parse(hiscore);
    highscore.innerHTML = " High Score: " + hiscore;
}

window.requestAnimationFrame(main);


window.addEventListener('keydown',e =>{
    inputDir = {x: 0,y: 1}  //Start The Game

    moveSound.play();
    musicSound.play();

    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x = 0;
            inputDir.y = 1;
            // document.querySelector('.head').style.transform = 'rotate(180deg)';
            break;
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x = 1;
            inputDir.y = 0;
            break;
    
        default:
            break;
    }
})






       

