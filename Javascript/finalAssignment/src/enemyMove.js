let addNo = 200;
// creating enemies at different positions
let enemyMovePosition = [
  { x: 330 + addNo, y: 10 },
  // { x: 400 + addNo, y: 80 },
  // { x: 870 + addNo, y: 70 },
  // { x: 1910 + addNo, y: 80 },
  // { x: 2600 + addNo, y: 80 },
  // { x: 2300, y: 60 },
  // { x: 2700, y: 80 },
  // { x: 3280, y: 100 },
  // { x: 3820, y: 100 },
  // { x: 4180, y: 100 },
  // { x: 4400, y: 80 },
];

// moving the enemies
let enemyMove = {
  animation: [
    // { sX: 0, sY: 43 },
    { sX: 190, sY: 43 },
    { sX: 170, sY: 43 },
    { sX: 151, sY: 43 },
    { sX: 132, sY: 43 },
    { sX: 114, sY: 43 },
    { sX: 95, sY: 43 },
  ],
  x: 300,
  y: 50,
  w: 25,
  h: 25,
  frame: 0,

  draw: function () {
    for (i = 0; i < enemyMovePosition.length; i++) {
      let enemyMove = this.animation[this.frame];

      ctx.drawImage(
        enemySprite,
        enemyMove.sX,
        enemyMove.sY,
        17,
        35,
        enemyMovePosition[i].x,
        enemyMovePosition[i].y,
        this.w,
        this.h
      );

      if (a + 350 >= enemyMovePosition[i].x) {
        enemyMovePosition[i].x -= 2;
      }
      if (enemyMovePosition[i].x < playerMove.x + 30) {
        enemyMovePosition[i].y -= 1;
      }
      if (
        (bullet.y >= enemyMovePosition[i].y) &
        (bullet.y <= enemyMovePosition[i].y + 10) &
        (bullet.x >= enemyMovePosition[i].x - 38) &
        (bullet.x <= enemyMovePosition[i].x + 10)
      ) {
        enemyMovePosition[i].y = 400;
        enemyMovePosition[i].x = 5000;
        enemyHit.play();
      }
      if (
        enemyMovePosition[i].x <= playerMove.x ||
        enemyMovePosition[i].x <= multiplayer.x
      ) {
        state = false;
        deathAudio.play();
      }
    }
  },
  stop: function () {},
  update: function () {
    this.frame += frames % 10 == 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;
  },
};
