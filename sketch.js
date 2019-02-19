

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
                
                rect(window.snakeX,window.snakeY,window.snakeLength,window.snakeHeight
                rect(window.seg2X,window.seg2Y,window.seg2Length,window.seg2Height)
                
        }
             
          
            
             
          
            /* Ensure move() is called for each draw() */
          foodDetect();
   move();
        }
        
