import { useState } from "react";

const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);

  // "_" -> indicate event handler
  const _incrementCount = () => {
    setClickCount(clickCount + 1);
  };

  return <button onClick={_incrementCount}>{clickCount} clicks so far</button>;
};

export default Clicker;
