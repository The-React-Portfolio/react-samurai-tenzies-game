/* react imports */
import React, { useState } from "react";

/* app imports */
import {Card} from "@components/cards/index.js";
import RollButton from "./roll-button.js";
import generateFreshDeck from "./service/generate-fresh-deck.js";
import buildCardComponents from "./service/build-card-components.js";

export default function BodySection() {
  let [deckOfCards, setDeckOfCards] = useState(generateFreshDeck);
  const cardComponents = buildCardComponents(deckOfCards);

  return (
    <React.Fragment>
      <section className="customRow cardsContainer">{cardComponents}</section>
      <RollButton/>
    </React.Fragment>
  );
};
