import React from "react";
import "./style.css";
function Thumbnail({ src, onClick }) {
  return (
    <div className="img-container">
      <div className="card">
        <img src={src} onClick={onClick} alt="" className="img-thumbnail" />;
      </div>
    </div>
  );
}

export default Thumbnail;
