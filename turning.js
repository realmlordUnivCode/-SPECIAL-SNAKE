
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
function turn(){
   if(window.turnDirection == "right"){
   window.seg2Length = window.length - 20
           for(window.length/10-2){
            window.seg2shrink = -10
            window.eg2shrinkvert = 0
                   window.seg2X = window.snakeX
                   window.seg2Y = window.snakeY
            window.snakeLength += 10 
                   snake()
                   
    }}
           if(window.turnDirection =="left"){
            window.seg2Length = window.length +20
                   for(window.length/10-2){
                           
                    window.seg2Shrink = 10
                           
                           window.seg2ShrinkVert = 0
                           window.seg2X = snakeX
                           window.seg2Y = snakeY
                           window.snakeLength +=10
                           snake()
                   }}
                          
                   if(window.direction =="up"){
                    window.seg2Height = window.length+20       
                   for(window.length/10-2){
                           
                           window.seg2ShrinkVert = 10
                           window.seg2Shrink =0
                           
                           window.seg2X = window.snakeX
                           window.seg2Y = window.snakeY
                           window.snakeHeight -=10
                           snake()
                   }
                        
                   }
                    
          
                    if(window.direction =="down"){
                      window.seg2Height = window.length-20
                            for(window.length/10=2)
                                    window.seg2ShrinkVert = -10
                            window.seg2Shrink=0
                            window.seg2X = window.snakeX
                            window.seg2Y = window.snakeY
                            window.snakeHeight -=10
                            snake()
                            
                    }}
                   
           }
   }
    
   }
  }
