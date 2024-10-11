import enemyController from "./enemyController.js";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const backgroud = new Image();
backgroud.src = "images/space.png";

const EnemyController = new enemyController(canvas);

function gameLoop() {
    ctx.drawImage(backgroud, 0, 0, canvas.width, canvas.height);
    EnemyController.draw(ctx);
}

setInterval(gameLoop,100/60);
