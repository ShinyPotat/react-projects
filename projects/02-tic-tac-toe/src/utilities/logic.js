export const checkWinner = (board) => {
  const checkLine = (start, step) => {
    const square1 = board[start];
    const square2 = board[start + step];
    const square3 = board[start + step * 2];

    return square1 !== null && square1 === square2 && square2 === square3
      ? square1
      : null;
  };

  // Check rows
  for (let index = 0; index < 9; index += 3) {
    const winner = checkLine(index, 1);
    if (winner) return winner;
  }

  // Check columns
  for (let index = 0; index < 3; index++) {
    const winner = checkLine(index, 3);
    if (winner) return winner;
  }

  // Check diagonal
  const diagonal1 = checkLine(0, 4);
  if (diagonal1) return diagonal1;

  const diagonal2 = checkLine(2, 2);
  if (diagonal2) return diagonal2;

  return null;
};

export const checkBoardIsFull = (board) => {
  return board.every((square) => square != null);
};
