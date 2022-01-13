let multiplayerCount = false;
let multiplayer = {
  animation: [
    { sX: 0, sY: 7 },
    { sX: 0, sY: 43 },
    { sX: 18, sY: 43 },
    { sX: 37, sY: 43 },
    { sX: 57.5, sY: 43 },
    { sX: 76, sY: 43 },
    { sX: 94, sY: 43 },
  ],
  x: 80,
  y: 50,
  w: 25,
  h: 25,
  frame: 0,
  draw: function () {
    let multiplayer = this.animation[this.frame];

    ctx.drawImage(
      sprites,
      multiplayer.sX,
      multiplayer.sY,
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
    multiplayerDropDown(1400, 1410, 80, 50);
    multiplayerDropDown(1847, 1855, 50, 30);
    multiplayerDropDown(2040, 2045, 80, 50);
    multiplayerDropDown(2163, 2200, 60, 30);
    multiplayerDropDown(2620, 2625, 80, 50);
    multiplayerDropDown(2745, 2755, 70, 50);

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
    console.log(this.y);
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
    } else {
      let intvl = setInterval(() => {
        this.y -= 1;

        if (this.y <= 10) {
          clearInterval(intvl);
          let intvll = setInterval(() => {
            this.y += 1;
            if (this.y >= 50) {
              clearInterval(intvll);
            }
          }, 15);
        }
      }, 10);
    }
  },
};

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 39) {
    multiplayer.moveRight();

    multiplayer.update();
    playerMove.update();
    moveSound.play();
    a += 3;
    for (i = 0; i < enemiesPosition.length; i++) {
      enemiesPosition[i].x -= 4;
    }

    for (i = 0; i < enemiesTwoPosition.length; i++) {
      enemiesTwoPosition[i].x -= 4;
    }
  }
});
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 68 || e.keyCode === 39) {
    multiplayer.frame = 0;
    playerMove.frame = 0;

    // multiplayer.update();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 37) {
    multiplayer.update();
    playerMove.update();
    a -= 3;

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
  if (e.keyCode === 37) {
    playerMove.frame = 0;
    multiplayer.frame = 0;
    multiplayer.update();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 16) {
    multiplayer.jump();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 83) {
    // ctx.drawImage(sprite, a, 0, 300, 600, 0, 0, 400, 400);
    multiplayer.sleep();
    multiplayer.frame == -2;
  }
});

let multiplayerDropDown = function (l, r, range, y) {
  if ((a >= l) & (a <= r) & (multiplayer.y == y)) {
    let intvl = setInterval(() => {
      // ctx.drawImage(sprite, a, 0, 300, 600, 0, 0, 400, 400);
      multiplayer.y += 1;
      if (multiplayer.y >= range) {
        clearInterval(intvl);
      }
    }, 50);
  }
};
////////////////////////////////////mbullet for multiplayer///////////////////////////////
// let x = 70;
let mbPositionX = 94;
let mbPositionY = 7;
let mbC = 9;
let mbW = 14;
let mbullet = {
  sX: mbPositionX,
  sY: mbPositionY,
  x: multiplayer.x + 22,
  y: multiplayer.y + 7,
  w: mbW,
  h: mbC,
  draw: function () {
    ctx.drawImage(
      sprites,
      this.sX,
      this.sY,
      mbC,
      mbW,
      mbullet.x,
      this.y,
      this.w,
      this.h
    );
  },
};

// ///////////////////////events for mbullets
window.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;
  // look down and shoot
  if (keysPressed["ArrowDown"] && event.key == "Enter") {
    bulletAudio.play();
    setTimeout(() => {
      let intvl = setInterval(() => {
        reset();

        mbullet.draw();

        mbullet.y += 1;
        mbullet.x += 3;
        if (mbullet.y >= 170) {
          clearInterval(intvl);
          mbullet.x = multiplayer.x + 5;
          mbullet.y = multiplayer.y + 7;
        }
      }, 10);
    }, timeInterval);
    timeInterval += 100;
    if (timeInterval > 100) {
      timeInterval = 100;
    }
  } else if (keysPressed["ArrowLeft"] && event.key == "Enter") {
    bulletAudio.play();
    setTimeout(() => {
      let intvl = setInterval(() => {
        reset();

        mbullet.draw();

        mbullet.y += 1;

        mbullet.x -= 1;
        if (mbullet.y >= 170) {
          clearInterval(intvl);
          mbullet.x = multiplayer.x - 10;
          mbullet.y = multiplayer.y + 7;

          reset();
        }
      }, 10);
    }, timeInterval);
    timeInterval += 100;
    if (timeInterval > 100) {
      timeInterval = 100;
    }
    // look up and shoot
  } else if (keysPressed["ArrowUp"] && event.key == "Enter") {
    bulletAudio.play();
    setTimeout(() => {
      let intvl = setInterval(() => {
        reset();

        mbullet.draw();

        mbullet.y -= 1;
        mbullet.x += 3;

        // x += 5;
        if (mbullet.y <= 0) {
          clearInterval(intvl);
          mbullet.x = multiplayer.x + 5;
          mbullet.y = multiplayer.y + 7;
        }
      }, 10);
    }, timeInterval);
    timeInterval += 100;
    if (timeInterval > 100) {
      timeInterval = 100;
    }

    // look front and shoot
  } else if (event.key == "Enter") {
    bulletAudio.play();
    setTimeout(() => {
      let intvl = setInterval(() => {
        reset();
        mbullet.draw();

        mbullet.y = multiplayer.y + 5;

        mbullet.x += 3;
        if (mbullet.x >= 300) {
          clearInterval(intvl);
          mbullet.x = multiplayer.x + 10;
        }
      }, 10);
    }, timeInterval);
    timeInterval += 100;
    if (timeInterval > 100) {
      timeInterval = 100;
    }
  }
});

window.addEventListener("keyup", () => {
  keysPressed = [];
});
