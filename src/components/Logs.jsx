export default function Logs({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.cell.row} ${turn.cell.col}`}>
            {turn.symbol} selected ({turn.cell.row},{turn.cell.col})
          </li>
        );
      })}
    </ol>
  );
}
