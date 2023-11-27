import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import { useState } from "react";

function App() {
  const [currentActivePlayer, setCurrentActivePlayer] = useState("X");
  const [turns, setTurns] = useState([]);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={currentActivePlayer === "X" ? true : false}
          ></Player>
          <Player
            name="Player 2"
            symbol="O"
            isActive={currentActivePlayer === "O" ? true : false}
          ></Player>
        </ol>
        <GameBoard
          currentPlayerSymbol={currentActivePlayer}
          switchPlayer={setCurrentActivePlayer}
          setTurns={setTurns}
        ></GameBoard>

        <Logs turns={turns}></Logs>
      </div>
    </main>
  );
}

export default App;
