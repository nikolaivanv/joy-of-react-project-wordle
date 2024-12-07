import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({ answer, onResetGame }) {
  return (
    <Banner status="sad" actionTitle="Reset Game" action={onResetGame}>
      <p>
        Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
