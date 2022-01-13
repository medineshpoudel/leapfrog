let playerJump = {
  animation: [
    { jX: 0, jY: 7 },
    { jX: 115, jY: 43 },
    { jX: 137, jY: 43 },
    { jX: 157, jY: 43 },
    { jX: 177, jY: 43 },
  ],
  x: 40,
  y: 50,
  w: 20,
  h: 25,
  frame: 0,
  draw: function () {
    reset();
    let playerJump = this.animation[this.frame];

    ctx.drawImage(
      sprites,
      playerJump.jX,
      playerJump.jY,
      17,
      35,
      this.x,
      this.y,
      this.w,
      this.h
    );
  },
  update: function () {
    this.frame += frames % 1 == 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;
  },
  jump: function () {
    this.y -= 2;
  },
  down: function () {
    if (this.y < 50) {
      this.y += 1;
    }
  },
};
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    let intvl = setInterval(() => {
      playerJump.jump();
      playerJump.update();

      if (playerJump.y < 20) {
        clearInterval(intvl);
        let intvvl = setInterval(() => {
          playerJump.y += 1;
          if (playerJump.y > 50) {
            clearInterval(intvvl);
            playerJump.frame = 0;
          }
        }, 10);
      }
    }, 50);
  }
});
// playerJump.jump();
