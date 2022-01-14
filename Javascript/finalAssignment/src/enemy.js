let enemies = [];
// creating multiple enemies at multiple positions
var enemiesPosition = [
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
  { x: 500, y: 30 },
  { x: 610, y: 30 },
];
let enemyX = 160;
let enemyY = 0;

// enemy object
let enemy = {
  draw: function () {
    for (i = 0; i < enemiesPosition.length; i++) {
      if (
        (bullet.y >= enemiesPosition[i].y) &
          (bullet.y <= enemiesPosition[i].y + 10) &
          (bullet.x >= enemiesPosition[i].x - 38) &
          (bullet.x <= enemiesPosition[i].x + 10) ||
        (mbullet.y >= enemiesPosition[i].y) &
          (mbullet.y <= enemiesPosition[i].y + 10) &
          (mbullet.x >= enemiesPosition[i].x - 38) &
          (mbullet.x <= enemiesPosition[i].x + 10)
      ) {
        enemiesPosition[i].y = 400;
        enemyHit.play();
      }
      if (playerMove.x <= enemiesPosition[i].x - 180) {
        ctx.drawImage(
          enemySprite,
          enemyX,
          enemyY,
          25,
          40,
          enemiesPosition[i].x,
          enemiesPosition[i].y,
          35,
          35
        );
      } else if (playerMove.x < enemiesPosition[i].x) {
        ctx.drawImage(
          enemySprite,
          enemyX + 31,
          183,
          20,
          35,
          enemiesPosition[i].x + 5,
          enemiesPosition[i].y + 7,
          35,
          30
        );
      } else if (playerMove.x >= enemiesPosition[i].x) {
        ctx.drawImage(
          enemySprite,
          enemyX + 27,
          343,
          30,
          50,
          enemiesPosition[i].x + 12,
          enemiesPosition[i].y + 3,
          35,
          35
        );
      } else if (playerMove.x >= enemiesPosition[i].x + 2) {
        ctx.drawImage(
          sprites,
          enemyX + 43,
          147,
          20,
          40,
          enemiesPosition[i].x + 12,
          enemiesPosition[i].y + 3,
          33,
          35
        );
      }
    }
  },
};

// enemies for level 2
var enemiesTwoPosition = [
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
// level 2 enemy object
let enemyTwo = {
  draw: function () {
    for (i = 0; i < enemiesTwoPosition.length; i++) {
      if (
        (bulletTwo.y >= enemiesTwoPosition[i].y - 10) &
        (bulletTwo.y <= enemiesTwoPosition[i].y + 30) &
        (bulletTwo.x >= enemiesTwoPosition[i].x - 38) &
        (bulletTwo.x <= enemiesTwoPosition[i].x + 10)
      ) {
        enemiesTwoPosition[i].y = 400;
        enemyHit.play();

        // console.log("ok");
      }
      if (playerTwoMove.x <= enemiesTwoPosition[i].x - 180) {
        ctx.drawImage(
          enemySprite,
          enemyX,
          enemyY,
          25,
          40,
          enemiesTwoPosition[i].x,
          enemiesTwoPosition[i].y,
          35,
          35
        );
      } else if (playerTwoMove.x < enemiesTwoPosition[i].x) {
        ctx.drawImage(
          enemySprite,
          enemyX + 31,
          220,
          20,
          35,
          enemiesTwoPosition[i].x + 5,
          enemiesTwoPosition[i].y + 7,
          30,
          28
        );
      } else if (playerTwoMove.x >= enemiesTwoPosition[i].x) {
        ctx.drawImage(
          sprites,
          enemyX + 37,
          257,
          30,
          50,
          enemiesTwoPosition[i].x - 15,
          enemiesTwoPosition[i].y + 7,
          40,
          39
        );
      } else if (playerTwoMove.x >= enemiesTwoPosition[i].x + 2) {
        ctx.drawImage(
          sprites,
          enemyX + 43,
          147,
          20,
          40,
          enemiesTwoPosition[i].x + 12,
          enemiesTwoPosition[i].y + 3,
          33,
          35
        );
      }
    }
  },
};
