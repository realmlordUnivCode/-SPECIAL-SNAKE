var window.snakeX = 0;
        var window.snakeY = 0;
        var window.snakeX2 = 20;
        var window.snakeY2 = 20;
        var window.direction = "right";
        var window.alive = true;
        var window.length = 20
      var window.foodCollected = true
      
        var window.foodX
        var window.foodY
       var window.snakeSeg2X = 0
        var window.snakeSeg2Y = 0
        var window.seg2XMovement= 0
        var window.seg2YMovement= 0
        var window.seg2Length = 0
         var window.snakeXMove =0
         var window.snakeYMove=0
         var window.seg2Shrink=0
         var window.seg2ShrinkVert=0


function keyPressed() {
            if (keyCode == DOWN_ARROW) {
                window.turnDirection = "down"
                turn()
            }
            if (keyCode == UP_ARROW) {
                window.turnDirection = "up"
                turn()
            }
            if (keyCode == RIGHT_ARROW) {
                window.turnDirection = "right"
                turn()
            }
            if (keyCode == LEFT_ARROW) {
                window.turnDirection = "left"
                turn()
            
            }
        }
        
      
        
        
        function setup() {
            createCanvas(window.innerWidth, window.innerHeight)
            frameRate(10);
        }
        function draw() {
          function snake(){
          window.snakeX += window.snakeYMove
          window.snakeY += window.snakeXMove
        window.snakeYHeight += window.yMovement
        window.snakeXLength += window.xMovement
       window.seg2Length =+ window.seg2Shrink
       window.seg2Height =+window.seg2VertShrink  
               background(0)
                stroke(255)
                fill(255)
                  rect(window.seg2X,window.seg2Y,window.seg2Length,window.seg2Height)
                rect(window.snakeX,window.snakeY,window.snakeLength,window.snakeHeight)
              
                
        }
             function foodDetect(){


  if (window.foodCollected == true){
               window.foodX = window.random(0,canvas.width - 10)
         window.foodY = random(0, canvas.height - 10)
          
         
                  window.foodCollected = false
            }
            // input()
            
            rect(window.foodX,window.foodY,10, 10)
             fill(255,0,0)
           
             
             if (dist(window.foodX,window.foodY,window.snakeX,window.snakeY) <= 20){
                 
                     window.foodCollected = true
                     window.length += 20
                 }
           
        

}

          
            
             
          
            /* Ensure move() is called for each draw() */
          foodDetect();
   move();
        }
        
