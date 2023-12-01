export function Square({ children, index, updateBoard, isSelected }) {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <span className={className} onClick={handleClick}>
      {children}
    </span>
  );
}
