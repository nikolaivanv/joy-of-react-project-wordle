import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, i) => (
        <p className="guess" key={i}>
          {guesses[i]
            ? checkGuess(guesses[i], answer).map(({ letter, status }, j) => (
                <span className={`cell ${status}`} key={j}>
                  {letter}
                </span>
              ))
            : range(WORD_LENGTH).map((_, j) => (
                <span className="cell" key={j}></span>
              ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
