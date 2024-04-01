import { useState, useEffect } from "react";

const NumberFact = () => {
  const [fact, setFact] = useState("loading");

  const fetchFact = async () => {
    const data = await fetch("http://numbersapi.com/random/trivia?json").then(
      (res) => res.json()
    );
    setFact(data.text);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return <div>{fact}</div>;
};

export default NumberFact;
