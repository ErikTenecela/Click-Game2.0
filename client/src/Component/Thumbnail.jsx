import React from "react";

function Thumbnail({ src, onClick }) {
  return <img src={src} onClick={onClick} alt="" className="img-thumbnail" />;
}

export default Thumbnail;
