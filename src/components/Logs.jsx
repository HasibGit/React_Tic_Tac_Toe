export default function Logs({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        return (
          <li key={index}>
            Cell: {turn.cell.row + ", " + turn.cell.col} | {turn.symbol}{" "}
          </li>
        );
      })}
    </ol>
  );
}
