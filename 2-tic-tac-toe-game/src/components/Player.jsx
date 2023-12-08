import { useState } from "react";

export default function Player({ initialName, symbol }) {

  const [name, setName] = useState(initialName);

  const [editing, setEditing] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleEdit() {
    setEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (editing) {
    playerName = <input type="text" required value={name} onChange={handleChange}/>;
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
