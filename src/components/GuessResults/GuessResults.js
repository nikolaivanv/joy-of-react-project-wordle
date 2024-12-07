import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ validatedGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, i) => (
        <Guess key={i} validatedGuess={validatedGuesses[i]} />
      ))}
    </div>
  );
}

export default GuessResults;
