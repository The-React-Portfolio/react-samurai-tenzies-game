/* react imports */
import React from "react";

/* app imports */
import "./styles.scss";
import Header from "./header.js";
import BodySection from "./body-section.js";
import RollButton from "./roll-button.js";
import {useCardsHook} from "./service/use-cards-hook.js";

export const RootPage = () => {
  let {
    isLoading, deckOfCards, onDiceRoll
  } = useCardsHook();

  return (
    <React.Fragment>
      <main>
        <div className="borderBoxContainer">
          <Header/>
          <BodySection
            isLoading={isLoading}
            deckOfCards={deckOfCards}
            onDiceRoll={onDiceRoll}
          />
        </div>
      </main>
    </React.Fragment>
  );
};
