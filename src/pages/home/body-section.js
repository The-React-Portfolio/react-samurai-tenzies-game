/* react imports */
import React, { useState } from "react";

/* app imports */
import RollButton from "./roll-button.js";
import {AppLoader} from "@components/app-loader/component.js";
import {useCardsHook} from "./service/use-cards-hook.js";
import buildCardComponents from "./service/build-card-components.js";

export default function BodySection() {
  let {isLoading, setIsLoading, deckOfCards} = useCardsHook();
  const cardComponents = buildCardComponents(deckOfCards);

  if (isLoading) {
    return (
      <AppLoader/>
    );
  }
  else {
    return (
      <React.Fragment>
        <section className="customRow cardsContainer">{cardComponents}</section>
        <RollButton/>
      </React.Fragment>
    );
  }
};
