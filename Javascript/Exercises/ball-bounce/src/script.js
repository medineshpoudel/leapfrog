const body = document.body;
// creating ball container

const container = document.createElement("div");
body.append(container);
container.style.height = "500px";
container.style.width = "500px";
container.style.background = "#D3D3D3";
container.style.margin = "40px auto";
container.style.position = "relative";

// creating ball
const ball = document.createElement("div");
container.append(ball);
ball.style.height = "100px";
ball.style.width = "100px";
ball.style.background = "blue";
ball.style.borderRadius = "50%";
ball.style.margin = "auto";
ball.style.position = "absolute";
ball.style.left = "180px";

// bouncing the ball
let a = true;
let margin = 0;
const bounce = function () {
  if (a === true) {
    margin += 1;
    ball.style.top = margin + "px";
    if (parseInt(ball.style.top) >= parseInt(container.style.height) - 95) {
      a = false;
    }
  } else {
    margin -= 1;
    ball.style.top = margin + "px";
    if (parseInt(ball.style.top) <= 0) {
      a = true;
    }
  }
};

// const up = function () {
//   if (margin > 400) {
//     margin = margin - 400;
//     ball.style.top = margin + "px";
//   }
// };

setInterval(bounce, 10);

// setInterval(up, 10);
