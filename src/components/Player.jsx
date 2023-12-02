import { useState } from "react";

const Player = ({ InitialName, symbol, isActive, onPlayerNameChange }) => {
  const [playerName, setPlayerName] = useState(InitialName);
  const [isEditing, setIsEditing] = useState(false);

  let btnCaption = "Edit";
  let editibleName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editibleName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

    btnCaption = "Save";
  }

  function handleEdit() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onPlayerNameChange(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editibleName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{btnCaption}</button>
    </li>
  );
};

export default Player;
