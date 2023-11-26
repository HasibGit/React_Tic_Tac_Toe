import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [currentActivePlayer, setCurrentActivePlayer] = useState("X");

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
        ></GameBoard>
      </div>
    </main>
  );
}

export default App;
