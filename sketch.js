alert("hello this works")

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
          snake()
             
          
            
             
          
            /* Ensure move() is called for each draw() */
          foodDetect();
   move();
        }
        
