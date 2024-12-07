import React from "react";

import { WORD_LENGTH } from "../../constants";
import { range } from "../../utils";

function Cell({ letter, status }) {
  return (
    <span className={status ? `cell ${status}` : "cell"}>{letter || ""}</span>
  );
}

function Guess({ validatedGuess }) {
  return (
    <p className="guess">
      {validatedGuess
        ? validatedGuess.map(({ letter, status }, i) => (
            <Cell key={i} letter={letter} status={status} />
          ))
        : range(WORD_LENGTH).map((i) => <Cell key={i} />)}
    </p>
  );
}

export default Guess;
