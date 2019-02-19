function turn(){
   if(direction == "right"){
   seg2Length = length - 20
           for(length/10-2){
            seg2shrink = -10
            seg2shrinkvert = 0
                   seg2X = snakeX
                   seg2Y = snakeY
            snakeLength += 10 
                   snake()
                   
    }}
           if(direction =="left"){
            seg2Length = length +20
                   for(length/10-2){
                           
                    seg2Shrink = 10
                           
                           seg2ShrinkVert = 0
                           seg2X = snakeX
                           seg2Y = snakeY
                           snakeLength +=10
                           snake()
                   }}
                          
                   if(direction =="up"){
                    seg2Height = length+20       
                   for(length/10-2){
                           
                           seg2ShrinkVert = 10
                           seg2Shrink =0
                           
                           seg2X = snakeX
                           seg2Y = snakeY
                           snakeHeight -=10
                           snake()
                   }
                        
                   }
                    
          
                    if(direction =="down"){
                      seg2Height = length-20
                            for(length/10=2)
                                    seg2ShrinkVert = -10
                            seg2Shrink=0
                            seg2X = snakeX
                            seg2Y = snakeY
                            snakeHeight -=10
                            snake()
                            
                    }}
                   
           }
   }
    
   }
  }
