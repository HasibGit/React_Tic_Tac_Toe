export default function GameBoard({ gameBoard, onSquareClick }) {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerValue, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={
                    gameBoard[rowIndex][colIndex] != null ? true : false
                  }
                  onClick={() => onSquareClick(rowIndex, colIndex)}
                >
                  {playerValue}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
