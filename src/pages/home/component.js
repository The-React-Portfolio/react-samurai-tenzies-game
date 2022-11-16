/* react imports */
import React from "react";

/* app imports */
import "./styles.scss";
import Header from "./header.js";
import BodySection from "./body-section.js";
import RollButton from "./roll-button.js";
import { BgContainer } from "@components/bg-container/component.js";
import {useCardsHook} from "./service/use-cards-hook.js";

export const RootPage = () => {
  let {
    isLoading, deckOfCards, onDiceRoll
  } = useCardsHook();

  return (
    <React.Fragment>
      <main>
        {
          window.innerWidth >= 768 && <BgContainer/>
        }
        <div className="borderBoxContainer customRow">
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
