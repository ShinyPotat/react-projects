export const checkWinner = (board) => {
  // Check rows
  for (let index = 0; index <= 6; index += 3) {
    const square1 = board[index];
    const square2 = board[index + 1];
    const square3 = board[index + 2];
    if (square1 === square2 && square2 === square3) {
      return square1;
    }
  }

  // Check columns
  for (let index = 0; index < 3; index++) {
    const square1 = board[index];
    const square2 = board[index + 3];
    const square3 = board[index + 6];
    if (square1 === square2 && square2 === square3) {
      return square1;
    }
  }

  // Check diagonal
  for (let index = 0; index < 3; index += 2) {
    const square1 = board[index];
    const square2 = board[4];
    const square3 = board[8 - index];
    if (square1 === square2 && square2 === square3) {
      return square1;
    }
  }

  return null;
};

export const checkBoardIsFull = (board) => {
  return board.every((square) => square != null);
};
