

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
