import { useState } from "react";

export default function Player({ name, symbol }) {
  const [editing, setEditing] = useState(false);

  function handleEdit() {
    setEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (editing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
