import { useState } from "react";

export default function Player({ name, symbol, isActive, updatePlayerName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            value={playerName}
            required
            onChange={() => {
              setPlayerName(event.target.value);
              updatePlayerName(event.target.value);
            }}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
      {isEditing && <button onClick={() => setIsEditing(false)}>Save</button>}
    </li>
  );
}
