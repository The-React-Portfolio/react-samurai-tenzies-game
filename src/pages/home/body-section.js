/* react imports */
import React, { useState } from "react";

/* app imports */
import RollButton from "./roll-button.js";
import generateFreshDeck from "./service/generate-fresh-deck.js";
import buildCardComponents from "./service/build-card-components.js";

export default function BodySection() {
  let [deckOfCards] = useState(generateFreshDeck);
  const cardComponents = buildCardComponents(deckOfCards);

  return (
    <React.Fragment>
      <section className="customRow cardsContainer">{cardComponents}</section>
      <RollButton/>
    </React.Fragment>
  );
};
