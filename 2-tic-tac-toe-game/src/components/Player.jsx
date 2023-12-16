import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [name, setName] = useState(initialName);

  const [editing, setEditing] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleEdit() {
    setEditing((editing) => !editing);

    if (editing) {
      onChangeName(symbol, name);
    }
  }

  let playerName = <span className="player-name">{name}</span>;

  if (editing) {
    playerName = (
      <input type="text" required value={name} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
