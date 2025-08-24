import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {" "}
          <strong>
            {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      </div>
    </Banner>
  );
}

export default WonBanner;
