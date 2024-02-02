/*----- constants -----*/
const SIDES = {
  1: "&#x2680;",
  2: "&#x2681;",
  3: "&#x2682;",
  4: "&#x2683;",
  5: "&#x2684;",
  6: "&#x2685;",
};

/*----- state variables -----*/
//what you want to keep track
const state = {
  player: "",
  totalPoints: {
    player1: 0,
    player2: 0,
  },
  points: 0,
  rolls: [],
};
/*----- cached elements  -----*/
//object catch our frequently used dom nODES
const elements = {
  dice: document.getElementById("dice"),
  points: document.getElementById("points"),
  player1TotalPoints: document.querySelector(".player1 .totalPoints"),
  player2TotalPoints: document.querySelector(".player2 .totalPoints"),
  player1Section: document.querySelector(".player1"),
  player2Section: document.querySelector(".player2"),

  player1Roll: document.querySelector(".player1 button.roll"),
  player2Roll: document.querySelector(".player2 button.roll"),

  player1Hold: document.querySelector(".player1 button.hold"),
  player2Hold: document.querySelector(".player2 button.hold"),
};

/*----- event listeners -----*/
//player1 roll dice
elements.player1Roll.addEventListener("click", function () {
  //exit function early (not going to run rollPair() function) if it is not our turn
  if (state.player !== "player1") return;
  rollPair();
});

//player2 roll dice
elements.player2Roll.addEventListener("click", function () {
  if (state.player !== "player2") {
    return;
  }
  rollPair();
});

//player1 hold dice
elements.player1Hold.addEventListener("click", function () {
  if (state.player !== "player1") {
    return;
  }

  hold("player1");
});
//player2 hold dice
elements.player2Hold.addEventListener("click", function () {
  if (state.player !== "player2") {
    return;
  }
  hold("player2");
});
/*----- functions -----*/
const init = function () {
  state.player = "player1";
  state.totalPoints.player1 = 0;
  state.totalPoints.player2 = 0;
  state.points = 0;
  state.rolls = [5, 4];
  render();
};
//a function is just a thing isnside a var
const render = function () {
  elements.dice.innerHTML = SIDES[state.rolls[0]] + " " + SIDES[state.rolls[1]];
  elements.points.innerText = state.points;
  elements.player1TotalPoints.innerText = state.totalPoints.player1;
  elements.player2TotalPoints.innerText = state.totalPoints.player2;

  if (state.player === "player1") {
    elements.player1Section.classList.add("currentPlayer");
    elements.player2Section.classList.remove("currentPlayer");
  } else {
    elements.player2Section.classList.add("currentPlayer");
    elements.player1Section.classList.remove("currentPlayer");
  }
};

const switchPlayer = function () {
  //ternary express
  if (state.player === "player1") {
    state.player = "player2";
  } else {
    state.player = "player1";
  }
};

//roll 1 dice
const rollDie = function () {
  //find random num 1-6: rounding up to an int between 1-6
  return Math.ceil(Math.random() * 6);
};

//roll 2 dices
const rollPair = function () {
  //actual dice rolls , ready to render
  state.rolls = [rollDie(), rollDie()];
  //calc 2 dices total points
  state.points = state.points + (state.rolls[0] + state.rolls[1]);
  //update screen
  render();
};

const hold = function (currentPlayer) {
  state.totalPoints[currentPlayer] += state.points;
  state.points = 0;

  //switch player
  switchPlayer();

  render();
};

init();
