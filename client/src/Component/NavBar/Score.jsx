import React from "react";

function Score({ score, topScore }) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <span>
        <h1>
          Score: {score} | Top Score: {topScore}
        </h1>
      </span>
    </nav>
  );
}

export default Score;

{
  /* <nav className="navbar navbar-dark bg-primary">
  <a className="navbar-brand" href="/">
    Clicky Game
  </a>
  <span>
    <h1>Score: {currentScore}</h1>
    <h1>Top scorer:{total} </h1>
  </span>
</nav>; */
}
