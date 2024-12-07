import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numberOfGuesses, onResetGame }) {
  return (
    <Banner status="happy" actionTitle="Reset Game" action={onResetGame}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {numberOfGuesses === 1 ? ` 1 guess` : ` ${numberOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
