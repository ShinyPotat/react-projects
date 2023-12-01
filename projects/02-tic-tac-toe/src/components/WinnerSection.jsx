import { RestartButton } from "./RestartButton";

export function WinnerSection({ winner, handleRestartGame }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Draw" : `The winner is ${winner}`;

  return (
    <section className="winner">
      <span>{winnerText}</span>
      <RestartButton handleClick={handleRestartGame} />
    </section>
  );
}
