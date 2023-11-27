import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import { useState } from "react";

function App() {
  const [currentActivePlayer, setCurrentActivePlayer] = useState("X");
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [turns, setTurns] = useState([]);

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
        <GameBoard
          currentPlayerSymbol={currentActivePlayer}
          switchPlayer={setCurrentActivePlayer}
          setTurns={setTurns}
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
