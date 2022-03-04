const board = document.querySelector("[data-board]");
const cells = document.querySelectorAll("[data-cell]");

const winningMessage = document.querySelector("[data-winning-message]");
const winningMessageText = document.querySelector(
  "[data-winning-message-text]"
);

const resetGame = document.querySelector("[data-restart-button]");

let isCircleTurn;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const setHoverBoardClass = () => {
  board.classList.remove("o");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("o");
  } else {
    board.classList.add("x");
  }
};

const swapTurns = () => {
  isCircleTurn = !isCircleTurn;
  setHoverBoardClass();
};

const startGame = () => {
  board.classList.add("x");
  isCircleTurn = false;

  for (const cell of cells) {
    cell.classList.remove("x");
    cell.classList.remove("o");
    cell.removeEventListener("click", handleClick);

    cell.addEventListener("click", handleClick, { once: true });
  }

  setHoverBoardClass();
  winningMessage.style.display = "none";
};

const checkForWin = (currentPlayer) => {
  return winningCombinations.some((combinations) => {
    return combinations.every((index) => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
};

const checkForDraw = () => {
  return [...cells].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("o");
  });
};

const endGame = (check) => {
  if (check) {
    winningMessage.style.display = "flex";
    winningMessageText.innerHTML = "Draw!";
  } else {
    winningMessage.style.display = "flex";
    winningMessageText.innerHTML = isCircleTurn ? `"O" won!` : `"X" won!`;
  }
};

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

const handleClick = (e) => {
  const cell = e.target;
  const classToAdd = isCircleTurn ? "o" : "x";

  placeMark(cell, classToAdd);

  const isWin = checkForWin(classToAdd);

  const isDraw = checkForDraw();

  if (isWin) {
    endGame(false);
  } else if (isDraw) {
    endGame(true);
  } else {
    swapTurns();
  }
};

resetGame.addEventListener("click", startGame);

startGame();
