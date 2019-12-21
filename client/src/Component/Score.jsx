import React from "react";

function Score({ score, topScore }) {
  return (
    <div>
      Score: {score} | Top Score: {topScore}
    </div>
  );
}

export default Score;
