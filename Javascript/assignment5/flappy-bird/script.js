let menuStart = document.querySelector(".menuStart");
let menuEnd = document.querySelector(".menuEnd");
let gameScreen = document.querySelector(".gameScreen");
let game = document.querySelector(".game");
let startBtn = document.querySelector("#start");
let score = document.querySelector(".score");
let scre = 0;
let scoreSum = document.querySelector("#scoreSum");

//creating random numbaer
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//creating random heights for pipe
let randomHeight = [45, 68, 145, 125, 108, 250, 230, 160, 276];

//values that take bird up and down
let birdSpeed = 2;
let dragDown = 2;
let pipeSpeed = 1;

//playing conditions
let playing = false;
// creating empty arrary for pipes
let pipeUpArr = [];
let pipeDownArr = [];

//Starting the Game
startBtn.addEventListener("click", startGame);

//moving keys up and down
let keys = {};
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
// when space is pressed
function keyDown(e) {
  keys[e.code] = true;
}
// when space is released
function keyUp(e) {
  keys[e.code] = false;
}

//initial bird when the space key is not pressed
function Bird() {
  let topPostions = [200, 250, 300, 350, 400];
  this.birdY = topPostions[randInt(0, topPostions.length)];
  this.create = function () {
    let bird = document.createElement("div");
    bird.setAttribute("id", "bird");
    bird.style.top = this.birdY + "px";
    return bird;
  };
}

//creating the pipes
function Pipe() {
  let self = this;
  this.pipeWidth = 55;
  this.startPostion = 410;

  this.create = function (position) {
    let pipeUp = document.createElement("div");
    pipeUp.setAttribute("id", "pipeUp");
    pipeUp.style.width = self.pipeWidth + "px";
    let pipeHeight = randomHeight[randInt(0, randomHeight.length)];
    pipeUp.style.height = pipeHeight + "px";
    pipeUp.style.left = position + self.startPostion + "px";
    pipeUp.style.top = 0 + "px";

    pipeUpArr.push(pipeUp);
    game.appendChild(pipeUp);

    let pipeSpace = 90;
    let pipeDown = document.createElement("div");
    pipeDown.setAttribute("id", "pipeDown");
    pipeDown.style.width = self.pipeWidth + "px";
    pipeDown.style.height = 470 - (pipeHeight + pipeSpace) + "px";
    pipeDown.style.left = position + self.startPostion + "px";
    pipeDown.style.top = pipeHeight + pipeSpace + "px";
    pipeDownArr.push(pipeDown);
    game.appendChild(pipeDown);
  };
}

// starting the game
function startGame() {
  playing = true;
  menuStart.classList.add("remove");
  gameScreen.classList.remove("remove");
  let b = new Bird();
  game.insertAdjacentElement("afterbegin", b.create());

  let position = 0;
  for (let x = 0; x < 500; x++) {
    let pipee = new Pipe();
    pipee.create(position);
    position += 150;
  }
  window.requestAnimationFrame(playGame);
}

//playing the game
function playGame() {
  if (playing) {
    let bird = document.querySelector("#bird");
    let birdTop = parseInt(bird.style.top);
    bird.style.backgroundImage = "url(./image/1.png)";

    let pipeU = document.querySelectorAll("#pipeUp");
    let pipeD = document.querySelectorAll("#pipeDown");

    // bird when the space key is pressed
    if (keys.Space) {
      bird.style.backgroundImage = "url(./image/2.png)";
      birdTop = birdTop - birdSpeed * 3;
    }
    // bird when the space key is relseased
    birdTop = birdTop + dragDown;

    //if the bird collides top or bottom
    if (birdTop <= 10 || birdTop >= 445) {
      gameover();
    }

    //collision detection between bird and obstacles
    for (let i = 0; i < pipeUpArr.length; i++) {
      let rect1 = {
        x: 80,
        y: birdTop,
        width: 38,
        height: 30,
      };
      let rect2 = {
        x: parseInt(pipeUpArr[i].style.left),
        y: parseInt(pipeUpArr[i].style.top),
        width: parseInt(pipeUpArr[i].style.width),
        height: parseInt(pipeUpArr[i].style.height),
      };
      let rect3 = {
        x: parseInt(pipeDownArr[i].style.left),
        y: parseInt(pipeDownArr[i].style.top),
        width: parseInt(pipeDownArr[i].style.width),
        height: parseInt(pipeDownArr[i].style.height),
      };
      if (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      ) {
        gameover();
      }
      if (
        rect1.x < rect3.x + rect3.width &&
        rect1.x + rect1.width > rect3.x &&
        rect1.y < rect3.y + rect3.height &&
        rect1.y + rect1.height > rect3.y
      ) {
        gameover();
      }
    }
    //updating bird position
    bird.style.top = birdTop + "px";

    for (let i = 0; i < 50; i++) {
      pipesMove(pipeU[i], pipeD[i]);
      let l = parseInt(pipeU[i].style.left);
      if (l === 35) {
        scre++;
        score.innerText = `${scre}`;
      }
    }
  }
  //moving or looping the game
  window.requestAnimationFrame(playGame);
}

//moving the pipes
function pipesMove(pipeU, pipeD) {
  let left = parseInt(pipeU.style.left);
  pipeD.style.left = left - pipeSpeed + "px";
  pipeU.style.left = left - pipeSpeed + "px";
}

//when the game is over
function gameover() {
  menuEnd.classList.remove("remove");
  gameScreen.classList.add("remove");
  pipeSpeed = 1;
  dragDown = 2;
  playing = false;
  birdSpeed = 2;
  scoreSum.innerText = `${scre}`;
  scre = 0;
  keys = {};
  let LastBird = game.querySelector("#bird");
  game.removeChild(LastBird);
  for (let x = 0; x < 50; x++) {
    let lastUpPipe = document.querySelector("#pipeUp");
    let lastDownPipe = document.querySelector("#pipeDown");
    game.removeChild(lastUpPipe);
    game.removeChild(lastDownPipe);
  }
}

// let restart = document.querySelector("#restart");
// restart.addEventListener("click", () => {
//   menuEnd.classList.add("remove");
//   menuStart.classList.remove("remove");
// });
