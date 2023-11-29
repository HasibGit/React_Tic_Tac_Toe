import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import GameOver from "./components/GameOver";
import { useState, useEffect } from "react";
import { WINNING_COMBINATIONS } from "../winning_combinations";

const initialBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameBoard, setGameBoard] = useState(initialBoardState);
  const [currentActivePlayer, setCurrentActivePlayer] = useState("X");
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [turns, setTurns] = useState([]);
  const [winnerSymbol, setWinnerSymbol] = useState("");

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
      updatedGameBoard[rowIndex][colIndex] = currentActivePlayer;

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

    setCurrentActivePlayer((prevPlayer) => {
      return prevPlayer === "X" ? "O" : "X";
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={currentActivePlayer === "X" ? true : false}
            updatePlayerName={setPlayer1Name}
          ></Player>
          <Player
            name="Player 2"
            symbol="O"
            isActive={currentActivePlayer === "O" ? true : false}
            updatePlayerName={setPlayer2Name}
          ></Player>
        </ol>

        {winnerSymbol && (
          <GameOver
            winner={winnerSymbol === "X" ? player1Name : player2Name}
          ></GameOver>
        )}

        <GameBoard
          gameBoard={gameBoard}
          onSquareClick={handleSelectSquare}
        ></GameBoard>
      </div>

      <Logs
        turns={turns}
        firstPlayer={player1Name}
        secondPlayer={player2Name}
      ></Logs>
    </main>
  );
}

export default App;
