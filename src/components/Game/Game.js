import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Keyboard from "../Keyboard/Keyboard";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);

  const handleGuessSubmit = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  };

  let gameStatus = "playing";
  if (guesses.includes(answer.toUpperCase())) {
    gameStatus = "won";
  } else if (guesses.length >= 6) {
    gameStatus = "lost";
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  const onResetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
  };

  return (
    <>
      {gameStatus === "won" && (
        <WonBanner numberOfGuesses={guesses.length} onResetGame={onResetGame} />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} onResetGame={onResetGame} />
      )}
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        disabled={gameStatus !== "playing"}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
