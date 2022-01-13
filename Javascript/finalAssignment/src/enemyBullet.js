// let ebX = enemiesPosition[0].x - 50;
// let ebY = enemiesPosition[0].y;

let abX = [200, 200, 200, 200, 200, 200, 200, 200];
let abY = [80, 80, 80, 90, 80, 80, 80, 80];
let enemybullet = {
  sX: 94,
  sY: 7,
  x: enemiesPosition[0].x - 50,
  y: enemiesPosition[0].y,
  w: 15,
  h: 10,
  draw: function () {
    for (i = 0; i < enemiesPosition.length; i++) {
      if (enemiesPosition[i].x - 180 < playerMove.x) {
        // enemyBullet.play();
        // setInterval(() => {
        ctx.drawImage(
          sprites,
          this.sX,
          this.sY,
          10,
          15,
          abX[i],
          abY[i],
          this.w,
          this.h
        );

        abX[i] -= 3;
        abY[i] -= 1;
        if ((abX[i] < 50) & (abY[i] < 10)) {
          abX[i] = enemiesPosition[i].x - 5;
          abY[i] = enemiesPosition[i].y + 5;
        }
        if (
          abX[i] > playerMove.x - 5 &&
          abX[i] < playerMove.x + 5 &&
          abY[i] < playerMove.y + 20 &&
          abY[i] > playerMove.y - 5
        ) {
          health -= 1;
          enemyHit.play();
          if (health == 0) {
            deathAudio.play();
          }
          abX = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200];
          abY = [80, 80, 80, 90, 80, 80, 80, 80, 80, 80];
        }
        // }, 30);
      }
    }
  },
};

let abTwoX = [200, 300, 200, 300, 300, 300];
let abTwoY = [65, 65, 35, 35, 35, 35];
let enemyTwobullet = {
  sX: 94,
  sY: 7,
  x: 200,
  y: 40,
  w: 15,
  h: 10,
  draw: function () {
    for (i = 0; i < enemiesTwoPosition.length; i++) {
      if (enemiesTwoPosition[i].x - 270 < playerTwoMove.x) {
        // enemyBullet.play();
        // setInterval(() => {
        ctx.drawImage(
          sprites,
          this.sX,
          this.sY,
          10,
          15,
          abTwoX[i],
          abTwoY[i],
          this.w,
          this.h
        );

        abTwoX[i] -= 3;
        abTwoY[i] += 1;
        if ((abTwoX[i] < 50) & (abTwoY[i] > 100)) {
          abTwoX[i] = enemiesTwoPosition[i].x;
          abTwoY[i] = enemiesTwoPosition[i].y + 10;
        }
        if (
          abTwoX[i] > playerTwoMove.x - 5 &&
          abTwoX[i] < playerTwoMove.x + 5 &&
          abTwoY[i] < playerTwoMove.y + 20 &&
          abTwoY[i] > playerTwoMove.y - 5
        ) {
          health -= 1;
          enemyHit.play();
          if (health == 0) {
            deathAudio.play();
          }
          // abTwoX = [200];
          // abTwoY = [80];
        }
        // }, 30);
      }
    }
  },
};
// setInterval(() => {
//   Enemybullet.draw();
// }, 100);

function reset() {
  ctx.drawImage(sprite, a, 0, 300, 600, 0, 0, 400, 400);
}
