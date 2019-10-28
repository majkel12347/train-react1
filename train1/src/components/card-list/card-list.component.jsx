import React from "react";
import "./card-list.styles.css";

import { Card } from "../card/card.component";

export const CardList = props => {
  console.log(props);
  return (
    <div className="CardList">
      {props.monsters.map(m => {
        return (
          <Card
            key={m.id}
            name={m.name}
            username={m.username}
            email={m.email}
            phone={m.phone}
            monster={m}
          />
        );
      })}
    </div>
  );
};
// {props.name} {props.id}

export default CardList;
