let x = 70;
let bPositionX = 94;
let bPositionY = 7;
let bC = 9;
let bW = 14;

// level 1 player bullet
let bullet = {
  sX: bPositionX,
  sY: bPositionY,
  x: playerMove.x + 22,
  y: playerMove.y + 7,
  w: bW,
  h: bC,
  draw: function () {
    ctx.drawImage(
      sprites,
      this.sX,
      this.sY,
      bC,
      bW,
      bullet.x,
      this.y,
      this.w,
      this.h
    );
  },
};
// level two player bullet
let bulletTwo = {
  sX: bPositionX,
  sY: bPositionY,
  x: playerTwoMove.x + 23,
  y: playerTwoMove.y + 7,
  w: 15,
  h: 10,
  draw: function () {
    ctx.drawImage(
      sprites,
      this.sX,
      this.sY,
      bC,
      bW,
      bulletTwo.x,
      this.y,
      this.w,
      this.h
    );
  },
};

let timeInterval = 0;
let keysPressed = [];

// event listerners for bullets

// when player shoots down
window.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;
  // look down and shoot
  if (keysPressed["s"] && event.key == "f") {
    bulletAudio.play();
    setTimeout(() => {
      let intvl = setInterval(() => {
        reset();
        bulletTwo.draw();
        bullet.draw();
        bulletTwo.y += 1;
        bullet.y += 1;
        bulletTwo.x += 3;
        bullet.x += 3;
        if (bullet.y >= 170) {
          clearInterval(intvl);
          bullet.x = playerMove.x + 5;
          bullet.y = playerMove.y + 7;
          bulletTwo.x = playerTwoMove.x + 22;
          bulletTwo.y = playerTwoMove.y + 7;
        }
      }, 10);
    }, timeInterval);
    timeInterval += 100;
    if (timeInterval > 100) {
      timeInterval = 100;
    }
    // when player shoots down
  } else if (keysPressed["a"] && event.key == "f") {
    bulletAudio.play();
    setTimeout(() => {
      let intvl = setInterval(() => {
        reset();
        reset();
        bullet.draw();

        bullet.y += 1;
        bulletTwo.y += 1;
        bulletTwo.x += 1;
        bullet.x -= 1;
        if (bullet.y >= 170) {
          clearInterval(intvl);
          bullet.x = playerMove.x - 10;
          bullet.y = playerMove.y + 7;
          bulletTwo.x = playerTwoMove.x + 22;
          bulletTwo.y = playerTwoMove.y + 7;

          reset();
        }
      }, 10);
    }, timeInterval);
    timeInterval += 100;
    if (timeInterval > 100) {
      timeInterval = 100;
    }
    // look up and shoot
  } else if (keysPressed["w"] && event.key == "f") {
    bulletAudio.play();
    setTimeout(() => {
      let intvl = setInterval(() => {
        reset();
        bullet.draw();
        bullet.y -= 1;
        bullet.x += 3;
        bulletTwo.x += 3;
        bulletTwo.y -= 1;
        if (bullet.y <= 0) {
          clearInterval(intvl);
          bullet.x = playerMove.x + 5;
          bullet.y = playerMove.y + 7;
          bulletTwo.x = playerTwoMove.x + 22;
          bulletTwo.y = playerTwoMove.y + 7;
          reset();
        }
      }, 10);
    }, timeInterval);
    timeInterval += 100;
    if (timeInterval > 100) {
      timeInterval = 100;
    }

    // look front and shoot
  } else if (event.key == "f") {
    bulletAudio.play();
    setTimeout(() => {
      let intvl = setInterval(() => {
        reset();
        bullet.draw();
        bulletTwo.draw();
        bullet.y = playerMove.y + 5;
        bulletTwo.x += 3;
        bullet.x += 3;
        if (bullet.x >= 300) {
          clearInterval(intvl);
          bullet.x = playerMove.x + 10;
          bulletTwo.x = playerTwoMove.x + 22;
          bulletTwo.y = playerTwoMove.y + 7;
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
