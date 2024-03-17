import { useState } from "react";

export default function NumberWang() {
  // state
  const [trivia, setTrivia] = useState([]);

  // array-> use .map to render

  // async-await
  const _fetchFact = async () => {
    const res = await fetch("http://numbersapi.com/random/trivia?json").then(
      (res) => res.json()
    );

    //create copy of trivia and add new object .text
    const updatedTrivia = [...trivia, res.text];
    //update trivia
    setTrivia(updatedTrivia);
  };

  // event listener to get trivia
  //   const _fetchFact = () => {
  //     fetch("http://numbersapi.com/random/trivia?json")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         //the readabkeStream is js object
  //         setTrivia(res.text);
  //       });
  //   };

  return (
    <div>
      <button onClick={_fetchFact}>Number Wang</button>
      {trivia.map((t) => (
        <p key={t}>{t}</p>
      ))}
    </div>
  );
}
