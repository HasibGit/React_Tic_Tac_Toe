import { useState, useEffect } from "react";
import { WINNING_COMBINATIONS } from "../../winning_combinations";

const initialBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  switchPlayer,
  currentPlayerSymbol,
  setTurns,
  setWinnerSymbol,
}) {
  const [gameBoard, setGameBoard] = useState(initialBoardState);

  useEffect(() => {
    // Check for a winner after the gameBoard state has been updated
    for (let combination of WINNING_COMBINATIONS) {
      const firstCell = gameBoard[combination[0].row][combination[0].column];
      const secondCell = gameBoard[combination[1].row][combination[1].column];
      const thirdCell = gameBoard[combination[2].row][combination[2].column];

      if (firstCell && firstCell === secondCell && secondCell === thirdCell) {
        setWinnerSymbol(firstCell);
        break;
      }
    }
  }, [gameBoard, setWinnerSymbol]);

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
                <button
                  disabled={
                    gameBoard[rowIndex][colIndex] != null ? true : false
                  }
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
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
