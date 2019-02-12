var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.fillstyle = "black";
ctx.fillrect(0,0,canvas.width,canvas.height);
var alive = false
var snakeX = 20
var snakeY = 20
var nextSnakeX = 30
var nextSnakeY = 30
<script>
      
while (alive = false)    
    
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    
    if(e.keycode=13){
    
    alive = true
    
    }

}


    </script>
    

while (alive = true) { 
  wait(20)
  

ctx.rect(snakeX, snakeY, 40, 40);
ctx.stroke();
 
  snakeX =nextSnakeX
  
  snakeY = nextSnakeY
  
  
