var snakeX = 20
var snakeY = 20
var nextSnakeX = 30
var nextSnakeY = 30


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rect(snakeX, snakeY, 40, 40);
ctx.stroke();
