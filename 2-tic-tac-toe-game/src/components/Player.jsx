import { useState } from "react";

export default function Player({ name, symbol }) {
  const [editing, setEditing] = useState(false);

  function handleEdit() {
    setEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (editing) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
}
