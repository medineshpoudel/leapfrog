body = document.querySelector("body");
mainArea = document.querySelector(".container");
mainArea.style.height = 550 + "px";
mainArea.style.width = 550 + "px";
let directionValue = [-1, 1]; //directions
let movement = [1, 2]; //speed
let balls = [];

function Ball() {
  let ball = this;
  this.create = function () {
    this.box = document.createElement("div");
    this.box.setAttribute("class", "box");
    this.dimension = 30;
    // creating box dimension
    this.box.style.height = this.dimension + "px";
    this.box.style.width = this.dimension + "px";
    this.ballRadius = parseInt(this.dimension / 2);
    // creating box poistion
    this.box.style.top = Math.floor(Math.random() * 525) + "px";
    this.box.style.left = Math.floor(Math.random() * 525) + "px";
    mainArea.appendChild(this.box);
    // creating ants
    this.img = document.createElement("img");
    this.img.setAttribute("class", "ant-images");
    this.img.setAttribute("src", "./image/antt.gif");
    this.box.appendChild(this.img);
    // handling click events on ants
    this.box.addEventListener("click", function () {
      ball.box.removeChild(ball.img);
      mainArea.removeChild(ball.box);
    });
    // creating directions
    this.dx = directionValue[Math.floor(Math.random() * directionValue.length)];
    this.dy = directionValue[Math.floor(Math.random() * directionValue.length)];
    // defining speed of balls
    this.speedX = movement[Math.floor(Math.random() * movement.length)];
    this.speedY = movement[Math.floor(Math.random() * movement.length)];

    // defining position of the box
    this.x = parseInt(this.box.style.left);
    this.y = parseInt(this.box.style.top);
    balls.push(this.box);
  };

  this.move = function () {
    //border collision detection

    // collision with the left and right  border
    if (
      ball.x + ball.dx * ball.speedX > 545 - ball.ballRadius ||
      ball.x + ball.dx * ball.speedX < ball.ballRadius - 10
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
        // when ball collides horizontally
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
let ballCount = 10;

//creating the balls
for (let i = 0; i < ballCount; i++) {
  b[i] = new Ball();
  b[i].create();
}
// moving the balls
for (let i = 0; i < ballCount; i++) {
  setInterval(b[i].move, 1000 / fps);
}
