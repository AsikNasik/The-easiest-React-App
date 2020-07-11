import React from "react";
import StarImg from "../images/star.png";

function Star() {
  return (
    <>
      <div className="star">
        <img src={StarImg} alt="Star1" id="star1"></img>
      </div>
      <div className="star">
        <img src={StarImg} alt="Star2" id="star2"></img>
      </div>
      <div className="star">
        <img src={StarImg} alt="Star3" id="star3"></img>
      </div>
    </>
  );
}

export default Star;
