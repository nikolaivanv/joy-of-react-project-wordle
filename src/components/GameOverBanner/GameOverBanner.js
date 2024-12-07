import React from "react";

function GameOverBanner({ status, answer, numberOfGuesses, resetGame }) {
  if (status === "playing") {
    return null;
  }
  if (status === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${numberOfGuesses} guesses`}</strong>.
        </p>
        <button onClick={() => resetGame()}>Restart Game</button>
      </div>
    );
  }
  if (status === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
        </p>
        <button onClick={() => resetGame()}>Restart Game</button>
      </div>
    );
  }
}

export default GameOverBanner;
