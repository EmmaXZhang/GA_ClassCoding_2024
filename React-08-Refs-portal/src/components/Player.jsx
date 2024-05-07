import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enterPlayerName, setPlayerName] = useState(null);

  function handleClick() {
    // access to input element, build-in input element (value, method) is stored in playerName.current
    setPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? "unknown entity"} </h2>
      <p>
        {/* connection name */}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
