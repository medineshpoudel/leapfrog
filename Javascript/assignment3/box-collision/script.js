container = document.querySelector(".container");
container.style.height = 550 + "px";
container.style.width = 550 + "px";
ballColor = [
  "#99d8d0",
  "#ffa931",
  "#b9ac92",
  "#e79cc2",
  "#99b898",
  "#5a3d55",
  "#84a9ac",
];
let min = 0;
let max = ballColor.length;
let directionValue = [-1, 1]; //directions
let movement = [3, 3]; //speed
let dm = [20, 25, 30, 35]; //heightwidth array for the balls
let balls = [];

function Ball() {
  let ball = this;
  this.create = function () {
    this.box = document.createElement("div");
    this.box.setAttribute("class", "box");
    // creating box of different height and width
    this.dimension = dm[Math.floor(Math.random() * dm.length)];
    this.box.style.height = this.dimension + "px";
    this.box.style.width = this.dimension + "px";
    this.ballRadius = parseInt(this.dimension / 2);
    // creating the box with different starting position
    this.box.style.top = Math.floor(Math.random() * 525) + "px";
    this.box.style.left = Math.floor(Math.random() * 525) + "px";
    // creating box of different ballColor
    this.index = Math.floor(Math.random() * (max - min + 1)) + min;
    this.box.style.backgroundColor = ballColor[this.index];
    container.appendChild(this.box);
    // creating the direction value
    this.dx = directionValue[Math.floor(Math.random() * directionValue.length)];
    this.dy = directionValue[Math.floor(Math.random() * directionValue.length)];
    // setting the speed of the box across x-axis and y-axis
    this.speedX = movement[Math.floor(Math.random() * movement.length)];
    this.speedY = movement[Math.floor(Math.random() * movement.length)];
    // setting box position
    this.x = parseInt(this.box.style.left);
    this.y = parseInt(this.box.style.top);
    balls.push(this.box);
  };

  this.move = function () {
    //border collision detection

    // collision with the left and right  border
    if (
      ball.x + ball.dx * ball.speedX > 545 - ball.ballRadius ||
      ball.x + ball.dx * ball.speedX < ball.ballRadius
    ) {
      ball.dx = -ball.dx;
    }
    // collision with the bottom top corner
    if (
      ball.y + ball.dy * ball.speedY > 545 - ball.ballRadius ||
      ball.y + ball.dy * ball.speedY < ball.ballRadius
    ) {
      ball.dy = -ball.dy;
    }
    // when there is no collision keep increasing the value of x and y
    ball.x += ball.dx * ball.speedX;
    ball.y += ball.dy * ball.speedY;

    ball.box.style.top = ball.y + "px";
    ball.box.style.left = ball.x + "px";

    //collision with others
    for (let i = 0; i < balls.length; i++) {
      if (balls[i] === ball.box) continue;
      let ball1 = {
        x: ball.x,
        y: ball.y,
        width: ball.dimension,
        height: ball.dimension,
      };
      let ball2 = {
        x: parseInt(balls[i].style.left),
        y: parseInt(balls[i].style.top),
        width: parseInt(balls[i].style.width),
        height: parseInt(balls[i].style.height),
      };

      if (
        // when balls collide horizonatlly
        ball1.x < ball2.x + ball2.width &&
        ball1.x + ball1.width > ball2.x &&
        // when ball collides vertically
        ball1.y < ball2.y + ball2.height &&
        ball1.y + ball1.height > ball2.y
      ) {
        ball.dx = -ball.dx;
        ball.dy = -ball.dy;
        ball.x += ball.dx * ball.speedX;
        ball.y += ball.dy * ball.speedY;

        ball.box.style.top = ball.y + "px";
        ball.box.style.left = ball.x + "px";
      }
    }
  };
}

let b = [];
let fps = 60;
let ballCount = 15;
//creating box
for (let i = 0; i < ballCount; i++) {
  b[i] = new Ball();
  b[i].create();
}
// moving the box
for (let i = 0; i < ballCount; i++) {
  setInterval(b[i].move, 1000 / fps);
}
