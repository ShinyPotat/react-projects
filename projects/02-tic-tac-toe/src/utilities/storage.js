export function saveGame(board, turn) {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
}

export function reseteGame() {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
}
