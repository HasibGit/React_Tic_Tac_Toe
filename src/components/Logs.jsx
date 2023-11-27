export default function Logs({ turns, firstPlayer, secondPlayer }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.cell.row} ${turn.cell.col}`}>
            {turn.symbol === "X" ? firstPlayer : secondPlayer} selected (
            {turn.cell.row},{turn.cell.col})
          </li>
        );
      })}
    </ol>
  );
}
