let container = document.querySelector(".container");
let scoreSpeed = container.querySelector(".score-speed");
let playScreen = document.querySelector(".playScreen");
let endScreen = document.querySelector(".endScreen");
let carLane = document.querySelector(".carLane");
let enemyList = ["car6.png"];
let enemyCarImg = enemyList[0];
let fromLeft = ["17px", "115px", "216px"];
let fromTop = ["-90px", "-225px", "-400px"];
let car = document.createElement("div");
let userCarSpeed = 2;
let enemyCarSpeed = 2;
let rightLane = false;
let leftLane = false;
let middleLane = false;
let enemies = [];
let score = 0;
let number = 3;
let finalScore = document.querySelector("#finalscore");
let playBtn = document.querySelector("#play");
let replayBtn = document.querySelector("#replay");
let laneDiv = document.createElement("div");
let roadImg = document.createElement("img");
let stop = [];
let userCarLeft = 115;
let enemyCar = [];

//creating opponent car
function createEnemy() {
  let enemy = this;
  this.updater = 1;

  this.createEnemyCar = function () {
    let leftPositionEnemyCar =
      fromLeft[Math.floor(Math.random() * fromLeft.length)];
    let topPositionEnemyCar =
      fromTop[Math.floor(Math.random() * fromTop.length)];

    enemy.enemyCar = document.createElement("div");
    enemy.enemyCar.setAttribute("class", "opponent-car");
    enemy.enemyCar.style.width = "67px";
    enemy.enemyCar.style.height = "90px";
    enemy.enemyCar.style.background = `url("./img/${enemyCarImg}")`;
    enemy.enemyCar.style.backgroundSize = "cover";
    enemy.enemyCar.style.backgroundPosition = "center center";
    enemy.enemyCar.style.position = "absolute";
    enemy.enemyCar.style.zIndex = 1;
    enemy.enemyCar.style.top = topPositionEnemyCar;
    enemy.enemyCar.style.borderRadius = "5px";
    enemy.enemyCar.style.left = leftPositionEnemyCar;
    carLane.appendChild(enemy.enemyCar);
    enemies.push(enemy.enemyCar);
  };

  //moving the enemy car
  this.moveEnemy = function () {
    enemy.updater++;
    if (enemy.updater === 1500) {
      enemy.updater = 0;
      changeSpeed();
    }
    let top = parseInt(enemy.enemyCar.style.top);
    top = top + enemyCarSpeed;
    if (top === 630) {
      score = score + 1;
      updateScore();
      top = -90;
      enemy.enemyCar.style.left =
        fromLeft[Math.floor(Math.random() * fromLeft.length)];
      enemy.enemyCar.style.top =
        fromTop[Math.floor(Math.random() * fromTop.length)];
    }
    enemy.enemyCar.style.top = top + "px";
    moveLane();

    //collisions with the cars
    for (let i = 0; i < enemies.length; i++) {
      let car1 = {
        x: userCarLeft,
        y: 530,
        width: 67,
        height: 90,
      };
      let car2 = {
        x: parseInt(enemies[i].style.left),
        y: parseInt(enemies[i].style.top),
        width: parseInt(enemies[i].style.width),
        height: parseInt(enemies[i].style.height),
      };

      if (
        car1.x < car2.x + car2.width &&
        car1.x + car1.width > car2.x &&
        car1.y < car2.y + car2.height &&
        car1.y + car1.height > car2.y
      ) {
        enemy.updater = 0;
        gameEnd();
      }
    }
  };
}

//generates user car
function generateUserCar() {
  car.style.width = "67px";
  car.style.height = "90px";
  car.style.background = 'url("./img/car1.png")';
  car.style.backgroundSize = "cover";
  car.style.backgroundPosition = "center center";
  car.style.position = "absolute";
  car.style.left = "115px";
  car.style.borderRadius = "5px";
  middleLane = true;
  car.style.top = "530px";
  carLane.appendChild(car);
}

// moving the car left-right
function moveCar(e) {
  if (e.key === "a" && middleLane) {
    car.style.left = "17px";
    userCarLeft = 47;
    middleLane = false;
    leftLane = true;
  }
  if (e.key === "a" && rightLane) {
    car.style.left = "115px";
    userCarLeft = 115;
    middleLane = true;
    rightLane = false;
  }
  if (e.key === "d" && middleLane) {
    car.style.left = "216px";
    userCarLeft = 186;
    middleLane = false;
    rightLane = true;
  }
  if (e.key === "d" && leftLane) {
    car.style.left = "115px";
    userCarLeft = 115;
    middleLane = true;
    leftLane = false;
  }
}

// creating the lane
function createLane() {
  carLane.appendChild(laneDiv);
  laneDiv.style.position = "absolute";
  laneDiv.style.width = "300px";
  laneDiv.style.height = "1260px";
  laneDiv.style.top = "-480px";
  roadImg.setAttribute("src", "./img/lane.jpg");
  roadImg.style.height = "100%";
  roadImg.style.width = "100%";
  laneDiv.appendChild(roadImg);
}

// moving the  game lane
function moveLane() {
  let topOfImage = parseInt(laneDiv.style.top);

  // console.log(userCarSpeed % -topOfImage);
  if (userCarSpeed % -topOfImage === 0) {
    laneDiv.style.top = "-480px";
  } else {
    topOfImage = topOfImage + userCarSpeed;
    laneDiv.style.top = topOfImage + "px";
  }
}

// updating the speed
function updateSpeed() {
  scoreSpeed.querySelector("#speed").innerText = userCarSpeed;
}

// updating the score
function updateScore() {
  scoreSpeed.querySelector("#score").innerText = score;
}

// changing the speed of the car
function changeSpeed() {
  if (!(userCarSpeed === 5 || enemyCarSpeed === 5)) {
    console.log(userCarSpeed, enemyCarSpeed);
    userCarSpeed += 1;
    updateSpeed();
    enemyCarSpeed++;
  }
}

// ending the game
function gameEnd() {
  for (let i = 0; i < number; i++) {
    clearInterval(stop[i]);
    console.log(stop[i]);
  }
  finalScore.innerText = score;
  endScreen.classList.remove("hide");
  endScreen.classList.add("show");
  scoreSpeed.classList.add("hide");
  scoreSpeed.classList.remove("show");
  carLane.classList.add("hide");
  carLane.classList.remove("show");
}

// reseting the game values
function resetGameValues() {
  let opponentCars = document.querySelectorAll(".opponent-car");

  enemies = [];
  score = 0;
  updater = 1;
  userCarSpeed = 2;
  enemyCarSpeed = 2;
  rightLane = false;
  leftLane = false;
  middleLane = false;
  stop = [];
  userCarLeft = 115;

  for (let i = 0; i < opponentCars.length; i++) {
    console.log(opponentCars[i]);
    opponentCars[i].parentElement.removeChild(opponentCars[i]);
  }
}

// moving the cars
function runCars() {
  for (let i = 0; i < number; i++) {
    enemyCar[i] = new createEnemy();
  }
  for (let i = 0; i < number; i++) {
    console.log(i);
    console.log("Runing cars...");
    enemyCar[i].createEnemyCar();
    stop[i] = setInterval(enemyCar[i].moveEnemy, 10);
  }
}

// starting the game
function playGame() {
  playScreen.classList.add("hide");
  scoreSpeed.classList.remove("hide");
  scoreSpeed.classList.add("show");
  carLane.classList.remove("hide");
  carLane.classList.add("show");
  document.querySelector("body").style.backgroundColor = "white";
  createLane();
  generateUserCar();
  updateScore();
  updateSpeed();
  runCars();
}
// restarting the game
function replayGame() {
  resetGameValues();
  playGame();
}

// playing and replaying the game
playBtn.addEventListener("click", playGame);
replayBtn.addEventListener("click", replayGame);

//moving the car left right
document.addEventListener("keydown", moveCar);
//hiding the score and game area before the game starts
scoreSpeed.classList.add("hide");
carLane.classList.add("hide");
endScreen.classList.add("hide");
