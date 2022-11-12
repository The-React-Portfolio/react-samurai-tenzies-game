/* react imports */
import React from "react";

/* app imports */
import {Card} from "@components/cards/component.js";

export default function buildCardComponents(arrayOfCards) {
  let data = arrayOfCards.splice(0);

  /* build and return */
  return data.reduce((composed, cardObject, index) => {
    const item = <Card key={index} data={cardObject}/>;
    composed.push(item);
    return composed;
  }, []);
}
