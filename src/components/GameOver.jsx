export default function GameOver({ winner, restartGame, isDraw }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {!isDraw && <p>{winner} won!</p>}
      {isDraw && <p>It's a draw!</p>}
      <p>
        <button onClick={restartGame}>Rematch!</button>
      </p>
    </div>
  );
}
