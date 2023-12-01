import { useState } from "react";
import "./App.css";
import { Square } from "./components/Square";
import { TURNS } from "./utilities/constants";
import { checkWinner, checkBoardIsFull } from "./utilities/logic";
import confetti from "canvas-confetti";
import { WinnerSection } from "./components/WinnerSection";
import { reseteGame, saveGame } from "./utilities/storage";
import { RestartButton } from "./components/RestartButton";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.O;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
      return;
    } else if (checkBoardIsFull(newBoard)) {
      setWinner(false);
      return;
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGame(newBoard, newTurn);
  };

  const handleRestartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.O);
    setWinner(null);

    reseteGame();
  };

  return (
    <main className="game">
      <h1>Tic Tac Toe</h1>
      <RestartButton handleClick={handleRestartGame} />
      <section className="board">
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        ))}
      </section>
      <section className="turns">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerSection winner={winner} handleRestartGame={handleRestartGame} />
    </main>
  );
}

export default App;
