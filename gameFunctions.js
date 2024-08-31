// Game Functions

function main (ctime){
    window.requestAnimationFrame(main)

    if ((ctime - lastPrintTime)/1000 < 1/Speed) {
        return;
    }
     
    lastPrintTime = ctime;
    GameEngine();

}



function isCollide(SnakeArr) {

    if (SnakeArr[0].y === 0 || SnakeArr[0].x === 0) {
        return true;
    }

    else if (SnakeArr[0].y === 18 || SnakeArr[0].x === 18) {
        return true;
    }

   for (let i = 1; i < SnakeArr.length; i++) {
    if (SnakeArr[i].x === SnakeArr[0].x && SnakeArr[i].y === SnakeArr[0].y ) {
        return true;
    }

    
    
   }

   
}



function GameEngine(){

    //  Part 1: Updating the snake  array & Food
     
    if (isCollide(SnakeArr)) {
        GameOver.play();
        musicSound.pause();
        musicSound.currentTime = 0
        inputDir = {x: 0, y: 0}
        alert("Game Over. Press Any Key to Play Again!")
         SnakeArr = [ {x: 13, y: 15}];
         musicSound.play( );
         Score = 0;
         Speed = 5;
         scored.innerHTML = Gamername + " Score:" + 0;
        
    }




    // If you have eaten the food , increment the score and regenerate the food

    if(SnakeArr[0].y === food.y && SnakeArr[0].x === food.x){
        SnakeArr.unshift({x: SnakeArr[0].x + inputDir.x, y: SnakeArr[0].y + inputDir.y});
        foodSound.play()
        Score = Score+1
        Speed = Speed+1/2;
        if (Score>hiscoreval) {
           let hisName = Gamername;
            hiscoreval = Score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
            highscore.innerHTML =  hisName +" Scored Highest: " +  hiscoreval;
        }
        scored.innerHTML = Gamername + " Scored:" + Score
        console.log(Score)
        let a = 2;
        let b = 16;
        food = {x: Math.round(a+(b-a)*Math.random()), y:  Math.round(a+(b-a)*Math.random())}
    }


    //  Moving the snake

    for(let i = SnakeArr.length - 2; i>=0 ; i--) {
        const element = SnakeArr[i];
        SnakeArr[i+1] = {...SnakeArr[i]};
    }


      SnakeArr[0].x += inputDir.x;
      SnakeArr[0].y += inputDir.y;

    
    // Part 2: Display the Snake 

    board.innerHTML = "";
    SnakeArr.forEach((e, index)=>{
         snakeElement = document.createElement('div');
         snakeElement.style.gridRowStart = e.y;
         snakeElement.style.gridColumnStart = e.x
         if (index === 0) {
            snakeElement.classList.add("head");
            
         }
         else{
            snakeElement.classList.add("snake");
         }
         board.appendChild(snakeElement);

    //    Part3: Display the Food



   foodElement = document.createElement('div');
     foodElement.style.gridRowStart = food.y;
     foodElement.style.gridColumnStart = food.x;
     foodElement.classList.add("food");
     board.appendChild(foodElement);

    })
}


