document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    
    if(e.keycode = 38) {
    
     direction = UP;
     
     };
     
     if(e.keycode = 40) { 
     
     direction = DOWN;
     
     };
     
     
    if(e.keycode = 37) {
    
    direction = LEFT;
     
     };
     
    if(e.keycode = 39) {
    
    direction = RIGHT;
    
    };
   
}
