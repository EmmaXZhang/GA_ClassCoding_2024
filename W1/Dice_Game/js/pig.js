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
  player1Roll: document.querySelector(".player1 button.roll"),
  player2Roll: document.querySelector(".player2 button.roll"),
};

/*----- event listeners -----*/
elements.player1Roll.addEventListener("click", function () {
  rollPair();
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

init();
