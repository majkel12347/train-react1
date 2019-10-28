import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <p className="card">
      <img
        alt="monsters"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      {props.id} {props.name} {props.username} {props.email} {props.phone}
    </p>
  );
};
