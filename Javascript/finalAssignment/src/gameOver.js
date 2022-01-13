let gameStart = new Image();
gameStart.src = "images/gameStart.jpg";
let gameStartX = 300;
let startGame = {
  sX: 0,
  sY: 0,

  draw: function () {
    ctx.drawImage(gameStart, 0, 0, 1200, 900, gameStartX, 0, 300, 190);
  },
};

canvas.addEventListener("click", (e) => {
  let canvasX = e.offsetX;
  let canvasY = e.offsetY;
  console.log(canvasY);

  if ((canvasX > 90) & (canvasX < 300) & (canvasY > 400) & (canvasY < 445)) {
    console.log("clicked");
    state = true;
  }
  if ((canvasX > 90) & (canvasX < 325) & (canvasY > 460) & (canvasY < 500)) {
    multiplayerCount = true;
    state = true;
  }
});

function draw() {
  if (level == 1) {
    if (state == false) {
      let intvl = setInterval(() => {
        gameStartX -= 1;
        startGame.draw();
        if (gameStartX < 0) {
          clearInterval(intvl);
          gameStartX = 0;
        }
      }, 300);
      multiplayerCount = false;
      health = 3;
      a = 0;
      boosterPositionX = 2900;
      playerMove.x = 40;
      playerMove.y = 50;
      enemiesPosition = [
        { x: 330, y: 80 },
        { x: 455, y: 80 },
        { x: 870, y: 70 },
        { x: 1910, y: 100 },
        { x: 2000, y: 70 },
        // { x: 2300, y: 60 },
        { x: 2700, y: 80 },
        { x: 3280, y: 100 },
        { x: 3820, y: 100 },
        { x: 4180, y: 100 },
        { x: 4400, y: 80 },
        //   { x: 500, y: 30 },
        //   { x: 610, y: 30 },
      ];
      enemyMovePosition = [
        { x: 390, y: 50 },
        { x: 570, y: 50 },
        { x: 670, y: 50 },
        // { x: 1270, y: 50 },
        // { x: 170, y: 50 },
        // { x: 455, y: 80 },
        // { x: 870, y: 70 },
        // { x: 1910, y: 100 },
        // { x: 2000, y: 70 },
        // { x: 2300, y: 60 },
        // { x: 2700, y: 80 },
        // { x: 3280, y: 100 },
        // { x: 3820, y: 100 },
        // { x: 4180, y: 100 },
        // { x: 4400, y: 80 },
      ];
      ebX = [330, 400];
      ebY = [80, 80];
    } else if (state == true) {
      reset();
      bullet.draw();

      // playerJump.draw();
      enemyMove.draw();
      enemyMove.update();
      playerMove.draw();
      enemy.draw();
      enemybullet.draw();
      healthBar.draw();
      healthBooster.draw();
      healthBooster.boost();
      bulletBoost.draw();
      if (multiplayerCount == true) {
        multiplayer.draw();
        mbullet.draw();
      }
      // playerJump.jump();
      // playerJump.update();
    }
  } else if (level == 2) {
    if (state == false) {
      let intvl = setInterval(() => {
        gameStartX -= 1;
        startGame.draw();
        if (gameStartX < 0) {
          clearInterval(intvl);
          gameStartX = 0;
        }
      }, 300);
      ctx.fillStyle = "black";
      health = 3;
      a = 0;
      playerTwoMove.x = 70;
      playerTwoMove.y = 70;

      enemiesTwoPosition = [
        { x: 250, y: 40 },
        { x: 720, y: 55 },
        { x: 890, y: 15 },
        { x: 1240, y: 35 },
        { x: 1590, y: 15 },
        { x: 1930, y: 15 },
        { x: 2590, y: 15 },
        { x: 3140, y: 40 },
        { x: 3490, y: 40 },
      ];
    } else if (state == true) {
      ctx.drawImage(level2, a, 0, 300, 600, 0, 0, 400, 400);
      playerTwoMove.draw();
      enemyTwo.draw();
      enemyTwobullet.draw();
      // bullet.draw();
      bulletTwo.draw();
      healthBar.draw();
    }
  }
}
