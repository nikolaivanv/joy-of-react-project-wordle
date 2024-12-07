import React from "react";
import { WORD_LENGTH } from "../../constants";

function GuessInput({ handleGuessSubmit, disabled }) {
  const [input, setInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleGuessSubmit(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        maxLength={WORD_LENGTH}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
