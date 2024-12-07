import React from "react";
import { checkGuess } from "../../game-helpers";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const bestStatus = (status1, status2) => {
  if (status1 === "correct" || status2 === "correct") {
    return "correct";
  }
  if (status1 === "misplaced" || status2 === "misplaced") {
    return "misplaced";
  }
  return "incorrect";
};

function Keyboard({ guesses, answer }) {
  let letters = {};

  guesses.forEach((guess) => {
    checkGuess(guess, answer).forEach(({ letter, status }) => {
      if (!letters[letter]) {
        letters[letter] = status;
      } else {
        letters[letter] = bestStatus(letters[letter], status);
      }
    });
  });

  return (
    <div>
      {rows.map((row, i) => (
        <div key={i} className="guess">
          {row.map((letter) => (
            <span key={letter} className={`cell  ${letters[letter]}`}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
