const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const sprite = new Image();
const sprites = new Image();
const enemySprite = new Image();
const sleepSprite = new Image();
enemySprite.src = "images/contraEnemy.png";
sleepSprite.src = "images/playerSleep.png";
sprites.src = "images/contraSprite.png";
sprite.src = "images/sprite.png";
let frames = 0;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
a = 0;
let state = false;
let moveSound = new Audio("sounds/move.wav");

// creating player for lvl1
let playerMove = {
  animation: [
    { sX: 0, sY: 7 },
    { sX: 0, sY: 43 },
    { sX: 18, sY: 43 },
    { sX: 37, sY: 43 },
    { sX: 57.5, sY: 43 },
    { sX: 76, sY: 43 },
    { sX: 94, sY: 43 },
  ],
  x: 40,
  y: 50,
  w: 25,
  h: 25,
  frame: 0,
  draw: function () {
    let playerMove = this.animation[this.frame];

    ctx.drawImage(
      sprites,
      playerMove.sX,
      playerMove.sY,
      17,
      35,
      this.x,
      this.y,
      this.w,
      this.h
    );
  },
  update: function () {
    this.frame += frames % 3 == 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;
  },

  moveRight: function () {
    dropDown(1390, 1430, 110, 50);
    dropDown(1400, 1410, 80, 50);
    dropDown(1847, 1865, 50, 30);
    dropDown(1847, 1865, 50, 31);
    dropDown(2035, 2060, 120, 52);
    dropDown(2035, 2060, 120, 51);
    dropDown(2035, 2060, 120, 50);
    dropDown(2163, 2200, 60, 30);
    dropDown(2260, 2300, 70, 50);
    dropDown(2037, 2139, 120, 50);
    dropDown(2356, 2370, 90, 70);
    dropDown(2356, 2370, 110, 71);
    dropDown(2390, 2420, 70, 50);
    dropDown(2390, 2420, 70, 51);
    dropDown(2425, 2455, 70, 111);
    dropDown(2425, 2455, 70, 110);
    dropDown(2480, 2520, 90, 70);
    dropDown(2480, 2520, 90, 71);
    dropDown(2550, 2640, 120, 91);
    dropDown(2550, 2640, 120, 90);
    dropDown(2640, 2690, 50, 30);
    dropDown(2620, 2625, 80, 50);
    dropDown(2745, 2755, 70, 50);
    dropDown(2225, 2295, 120, 71);
    dropDown(2225, 2295, 120, 70);
    dropDown(2355, 2420, 120, 71);
    dropDown(2355, 2420, 120, 70);
    dropDown(2745, 2755, 70, 51);
    dropDown(2740, 2755, 70, 50);
    dropDown(2870, 2890, 110, 70);
    dropDown(2870, 2890, 110, 73);
    dropDown(2870, 2890, 110, 71);
    dropDown(2870, 2890, 110, 72);
    dropDown(2990, 3010, 120, 90);
    dropDown(3090, 3120, 110, 70);
    dropDown(3217, 3230, 70, 50);
    dropDown(3217, 3230, 70, 50);
    dropDown(3256, 3266, 90, 70);
    dropDown(3256, 3266, 90, 73);
    dropDown(3280, 3290, 100, 91);
    console.log(a);
    console.log(this.y);
    if (this.y >= 115) {
      state = false;
      a = 0;
      deathAudio.play();
    }

    if ((a >= 2163) & (a <= 2168)) {
      let intvl = setInterval(() => {
        this.y += 1;
        if (this.y >= 70 || a >= 2202) {
          clearInterval(intvl);
        }
      }, 50);
    }
  },
  moveLeft: function () {
    this.x -= 1;
    if (this.x <= 0) {
      this.x = 0;
    }
  },
  sleep: function () {
    ctx.drawImage(sleepSprite, 0, 0, 30, 35, this.x, this.y + 10, 45, 25);
  },
  jump: function () {
    if (a > 1330 && a < 2190) {
      let intvl = setInterval(() => {
        this.y -= 1;

        if (this.y <= 10) {
          clearInterval(intvl);
          let intvll = setInterval(() => {
            this.y += 1;
            if (this.y >= 30) {
              clearInterval(intvll);
            }
          }, 15);
        }
      }, 10);
    }
    // jumpung player at different positions
    playerJump(0, 1320, 50, 50);
    playerJump(1310, 1400, 30, 50);
    playerJump(1464, 1525, 30, 81);
    playerJump(1464, 1525, 30, 80);
    playerJump(1330, 1525, 30, 80);
    playerJump(1845, 1985, 50, 50);
    playerJump(1845, 1985, 50, 51);
    playerJump(2169, 2193, 70, 73);
    playerJump(2169, 2193, 70, 71);
    playerJump(2169, 2193, 70, 70);
    playerJump(2190, 2229, 50, 70);
    playerJump(2190, 2230, 50, 72);
    playerJump(2425, 2455, 70, 111);
    playerJump(2425, 2455, 70, 110);
    playerJump(2190, 2230, 50, 73);
    playerJump(2190, 2230, 50, 71);
    playerJump(2300, 2355, 50, 71);
    playerJump(2300, 2355, 50, 70);
    playerJump(2300, 2355, 50, 71);
    playerJump(2424, 2480, 70, 71);
    playerJump(2424, 2480, 70, 70);
    playerJump(2485, 2550, 50, 91);
    playerJump(2485, 2550, 50, 90);
    playerJump(2485, 2550, 50, 92);
    playerJump(2550, 2580, 50, 50);
    playerJump(2581, 2610, 30, 50);
    playerJump(2580, 2600, 70, 50);
    playerJump(2622, 2643, 50, 80);
    playerJump(2622, 2643, 50, 81);
    playerJump(2644, 2664, 50, 80);
    playerJump(2745, 2865, 70, 70);
    playerJump(2745, 2865, 70, 71);
    playerJump(2745, 2865, 70, 72);
    playerJump(2745, 2865, 70, 73);
    playerJump(2850, 2980, 90, 113);
    playerJump(2850, 2980, 90, 110);
    playerJump(2850, 2980, 90, 112);
    playerJump(2850, 2980, 90, 111);
    playerJump(2950, 3030, 70, 90);
    playerJump(3030, 3330, 50, 110);
    playerJump(3030, 3087, 50, 70);

    // let intvl = setInterval(() => {
    //   this.y -= 1;

    //   if (this.y <= 10) {
    //     clearInterval(intvl);
    //     let intvll = setInterval(() => {
    //       this.y += 1;
    //       if (this.y >= 50) {
    //         clearInterval(intvll);
    //       }
    //     }, 15);
    //   }
    // }, 10);
  },
};

// creating player for level2
let playerTwoMove = {
  animation: [
    { sX: 0, sY: 7 },
    { sX: 0, sY: 43 },
    { sX: 18, sY: 43 },
    { sX: 37, sY: 43 },
    { sX: 57.5, sY: 43 },
    { sX: 76, sY: 43 },
    { sX: 94, sY: 43 },
  ],
  x: 70,
  y: 70,
  w: 25,
  h: 25,
  frame: 0,
  draw: function () {
    let playerMove = this.animation[this.frame];

    ctx.drawImage(
      sprites,
      playerMove.sX,
      playerMove.sY,
      17,
      35,
      this.x,
      this.y,
      this.w,
      this.h
    );
  },
  update: function () {
    this.frame += frames % 3 == 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;
  },

  moveRight: function () {
    playerTwodropDown(10, 21, 80, 70);
    playerTwodropDown(111, 120, 110, 80);
    playerTwodropDown(141, 150, 70, 50);
    playerTwodropDown(207, 215, 90, 70);
    playerTwodropDown(300, 307, 110, 90);
    playerTwodropDown(558, 570, 80, 50);
    playerTwodropDown(687, 700, 90, 50);
    playerTwodropDown(909, 917, 70, 50);
    playerTwodropDown(1038, 1045, 70, 50);
    playerTwodropDown(1230, 1250, 50, 30);
    playerTwodropDown(1422, 1435, 70, 50);
    playerTwodropDown(1680, 1690, 80, 70);
    playerTwodropDown(1770, 1780, 110, 80);
    playerTwodropDown(1905, 1915, 50, 30);
  },
  moveLeft: function () {
    this.x -= 1;
    if (this.x <= 0) {
      this.x = 0;
    }
  },
  sleep: function () {
    ctx.drawImage(sleepSprite, 0, 0, 30, 35, this.x, this.y + 10, 45, 25);
  },
  jump: function () {
    // jumping player two at different positions
    playerTwoJump(0, 15, 70, 70);
    playerTwoJump(10, 110, 50, 80);
    playerTwoJump(111, 130, 50, 110);
    playerTwoJump(130, 150, 70, 110);
    playerTwoJump(145, 230, 70, 70);
    playerTwoJump(246, 320, 90, 90);
    playerTwoJump(340, 430, 70, 110);
    playerTwoJump(369, 490, 70, 70);
    playerTwoJump(490, 520, 50, 70);
    playerTwoJump(490, 555, 50, 50);
    playerTwoJump(594, 624, 50, 80);
    playerTwoJump(634, 687, 50, 50);
    playerTwoJump(690, 753, 90, 90);
    playerTwoJump(753, 783, 70, 90);
    playerTwoJump(753, 813, 70, 70);
    playerTwoJump(813, 850, 50, 70);
    playerTwoJump(912, 942, 70, 70);
    playerTwoJump(942, 978, 50, 70);
    playerTwoJump(978, 1038, 50, 50);
    playerTwoJump(1014, 1070, 70, 70);
    playerTwoJump(1070, 1105, 30, 70);
    playerTwoJump(1200, 1385, 50, 50);
    playerTwoJump(1385, 1425, 30, 50);
    playerTwoJump(1425, 1900, 30, 30);
    playerTwoJump(1460, 1680, 30, 70);
    playerTwoJump(1710, 1770, 30, 80);
    playerTwoJump(1775, 1845, 30, 110);
    playerTwoJump(1845, 1875, 50, 110);
    playerTwoJump(1900, 3900, 50, 50);
  },
};

function draw() {}

function loop() {
  draw();
  frames++;
  requestAnimationFrame(loop);
}
loop();

var startAudio = new Audio("sounds/title.mp3");
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 68) {
    playerMove.moveRight();
    playerTwoMove.moveRight();
    playerMove.update();
    playerTwoMove.update();
    multiplayer.update();
    moveSound.play();
    a += 3;
    boosterPositionX -= 4;

    for (i = 0; i < enemiesPosition.length; i++) {
      enemiesPosition[i].x -= 4;
    }

    for (i = 0; i < enemiesTwoPosition.length; i++) {
      enemiesTwoPosition[i].x -= 4;
    }
  }
});
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 68) {
    playerMove.frame = 0;
    playerTwoMove.frame = 0;

    // playerMove.update();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 65) {
    // playerMove.moveLeft();
    playerMove.update();
    playerTwoMove.update();
    a -= 3;
    boosterPositionX += 4;
    // ctx.drawImage(sprite, a, 0, 300, 600, 0, 0, 400, 400);
    for (i = 0; i < enemiesPosition.length; i++) {
      enemiesPosition[i].x += 4;
    }
    for (i = 0; i < enemiesTwoPosition.length; i++) {
      enemiesTwoPosition[i].x += 4;
    }
    if (a <= 0) {
      a = 0;
    }
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 65) {
    playerMove.frame = 0;
    playerTwoMove.frame = 0;
    playerMove.update();
    playerTwoMove.update();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    playerMove.jump();
    playerTwoMove.jump();
    let int = 0;

    let intvl = setInterval(() => {
      int++;

      if (int > 200) {
        clearInterval(intvl);
      }
    }, 10);
  }
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 83) {
    playerMove.sleep();
    playerMove.frame == -2;
  }
});

let dropDown = function (l, r, range, y) {
  if ((a >= l) & (a <= r) & (playerMove.y == y)) {
    let intvl = setInterval(() => {
      playerMove.y += 1;
      if (playerMove.y >= range) {
        clearInterval(intvl);
      }
    }, 50);
  }
};
let playerTwodropDown = function (l, r, range, y) {
  if ((a >= l) & (a <= r) & (playerTwoMove.y == y)) {
    let intvl = setInterval(() => {
      playerTwoMove.y += 1;
      if (playerTwoMove.y > range - 2) {
        clearInterval(intvl);
      }
    }, 50);
  }
};

let playerTwoJump = function (l, r, range, y) {
  if (a > l && (a < r) & (playerTwoMove.y == y)) {
    let intvl = setInterval(() => {
      playerTwoMove.y -= 1;

      if (playerTwoMove.y <= 10) {
        clearInterval(intvl);
        let intvll = setInterval(() => {
          playerTwoMove.y += 1;
          if (playerTwoMove.y >= range) {
            clearInterval(intvll);
          }
        }, 15);
      }
    }, 10);
  }
};
let playerJump = function (l, r, range, y) {
  if (a > l && (a < r) & (playerMove.y == y)) {
    let intvl = setInterval(() => {
      playerMove.y -= 1;

      if (playerMove.y <= 10) {
        clearInterval(intvl);
        let intvll = setInterval(() => {
          playerMove.y += 1;
          if (playerMove.y >= range) {
            clearInterval(intvll);
          }
        }, 15);
      }
    }, 10);
  }
};

function reset() {
  ctx.drawImage(sprite, a, 0, 300, 600, 0, 0, 400, 400);
}
