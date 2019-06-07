import React from "react";
import "./style.css";

function Card(props) {
  return (
      <div className="img-container">
        <img alt={props.name} src={props.image} width = "200" height = "200" onClick={() => props.randomizePics(props.id)} className="remove" />
      </div>
      // {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      //   𝘅
      // </span> */}
  );
}

export default Card;
