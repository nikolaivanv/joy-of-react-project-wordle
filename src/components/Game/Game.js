import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);

  const handleGuessSubmit = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  };

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
  };

  let status = "playing";
  if (guesses.includes(answer.toUpperCase())) {
    status = "won";
  } else if (guesses.length >= 6) {
    status = "lost";
  }

  return (
    <div>
      <GameOverBanner
        status={status}
        answer={answer}
        numberOfGuesses={guesses.length}
        resetGame={resetGame}
      />
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        disabled={status !== "playing"}
      />
      <Keyboard guesses={guesses} answer={answer} />
    </div>
  );
}

export default Game;
