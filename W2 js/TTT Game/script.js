const state = {
  board: null,
  player: "x",
};

//get all squares in array
const squares = document.querySelectorAll(".square");

//loop through squares and listen for a click on each
squares.forEach(function (square) {
  square.addEventListener("click", placeTile);
});

//functions

function init() {
  state.board = {
    "top-left": null,
    "top-center": null,
    "top-right": null,
    "center-left": null,
    "center-center": null,
    "center-right": null,
    "bottom-left": null,
    "bottom-center": null,
    "bottom-right": null,
  };
  state.player = "x";
}

function render() {
  //iterate through each cell and reset value to null.(reset everything)
  for (let id in state.board) {
    document.getElementById(id).innerText = state.board[id];
  }
}

function placeTile() {
  //figure out which cell is clicked (look at the ID), this refer to current dom element
  const id = this.id;

  //if this square is occupied, leave this function immdiately
  if (state.board[id]) return;
  //update the board state with that ID
  state.board[id] = state.player;

  //swithc player
  if (state.player === "x") {
    state.player = "o";
  } else {
    state.player = "x";
  }

  render();
}

init();
