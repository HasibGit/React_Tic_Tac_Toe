import { useState } from "react";

const initialBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ switchPlayer }) {
  const [gameBoard, setGameBoard] = useState(initialBoardState);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
      updatedGameBoard[rowIndex][colIndex] = "X";

      return updatedGameBoard;
    });

    switchPlayer((prevPlayer) => {
      return prevPlayer === "X" ? "O" : "X";
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerValue, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
