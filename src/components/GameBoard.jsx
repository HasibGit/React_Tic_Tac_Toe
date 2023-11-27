import { useState } from "react";

const initialBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  switchPlayer,
  currentPlayerSymbol,
  setTurns,
}) {
  const [gameBoard, setGameBoard] = useState(initialBoardState);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
      updatedGameBoard[rowIndex][colIndex] = currentPlayerSymbol;

      return updatedGameBoard;
    });

    setTurns((prevTurns) => {
      return [
        {
          cell: { row: rowIndex, col: colIndex },
          symbol:
            prevTurns.length > 0
              ? prevTurns[0].symbol === "X"
                ? "O"
                : "X"
              : "X",
        },
        ...prevTurns,
      ];
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
