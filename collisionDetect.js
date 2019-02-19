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
