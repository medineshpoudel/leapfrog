let bulletBooster = new Image();
bulletBooster.src = "images/bulletBooster.png";
let health = 3;
let healthBar = {
  draw: function () {
    if (health == 3) {
      ctx.drawImage(sprites, 178, 0, 30, 20, 250, 0, 30, 20);
      ctx.drawImage(sprites, 180, 0, 30, 20, 230, 0, 30, 20);
    } else if (health == 2) {
      ctx.drawImage(sprites, 178, 0, 30, 20, 230, 0, 30, 20);
    } else if (health == 0) {
      state = false;
    }
  },
};
let boosterSound = new Audio("/sounds/booster.wav");
let boosterPositionX = 2900;
let boosterPositionY = 70;
let healthBooster = {
  draw: function () {
    ctx.drawImage(
      bulletBooster,
      355,
      0,
      30,
      40,
      boosterPositionX,
      boosterPositionY,
      50,
      30
    );
  },
  boost: function () {
    if (
      (bullet.x >= boosterPositionX) &
      (bullet.x < boosterPositionX + 20) &
      (bullet.y + 20 > boosterPositionY) &
      (bullet.y - 20 < boosterPositionY)
    ) {
      boosterSound.play();
      if (health <= 2) {
        health = 3;
      }
      boosterPositionY = 400;
    }
  },
};

let bulletBoost = {
  draw: function () {
    // bPositionX = 180;
    // bPositionY = 0;
    // bC = 7;
    // bW = 15;
    // ctx.drawImage(sprites, bPositionX, bPositionY, 5, 20, 200, 40, 15, 30);
  },
};
