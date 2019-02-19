 function move() {
            /* Move this inside the brackets of move() */
            if (window.direction == "up") {
                window.snakeY = snakeY - 10
                window.snakeY2 = length
                window.snakeX2 = 20
            }
            if (window.direction == "down") {
                window.snakeY = snakeY + 10
                window.snakeY2 = length
                window.snakeX2 = 20
            }
            if (window.direction == "right") {
                window.snakeX = snakeX + 10
                window.snakeX2 = length
                window.snakeY2 = 20
            }
            if (window.direction == "left") {
                snakeX = snakeX - 10
                snakeX2 = length
                snakeY2 = 20
            }
        }
