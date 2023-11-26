export default function GameBoard() {
  const initialBoardState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return (
    <ol id="game-board">
      {initialBoardState.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerValue, colIndex) => (
              <li key={colIndex}>
                <button>{playerValue}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
