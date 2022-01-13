let level = 1;
let level2 = new Image();
level2.src = "/images/level2.png";
let nextSound = new Audio("/sounds/nextLevel.wav");
let gameintvl = setInterval(() => {
  if (a >= 3300) {
    clearInterval(gameintvl);
    nextSound.play();

    state = false;
    level = 2;
  }
}, 100);
