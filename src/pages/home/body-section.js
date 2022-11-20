/* react imports */
import React, { useState } from "react";

/* app imports */
import {AppLoader} from "@components/app-loader/component.js";
import {checkIfGameComplete} from "./service/check-if-complete.js";
import {Card} from "@components/cards/component.js";
import {AppImage} from "@components/app-image/component.js";
import {AppSuccess} from "@components/success-component/component.js";
import RollButton from "./roll-button.js";

export default function BodySection(props) {
  let [isComplete, setIsComplete] = useState(false);

  if (props.isLoading) {
    return (
      <AppLoader/>
    );
  }
  else {
    return (
      <React.Fragment>
        {
          isComplete === true &&
          <AppSuccess/>
        }
        <section className="customRow cardsContainer">
          {
            props.deckOfCards.map((cardObject, index) => {
              const imageProps = {
                src: cardObject.icon,
                alt: cardObject.name,
                title: cardObject.name
              };

              return (
                <Card
                  key={index}
                  value={cardObject.name}
                  isLocked={cardObject.isLocked}
                  cardId={cardObject.id}
                  afterLockStateChange={() => {checkIfGameComplete(setIsComplete)}}
                >
                  <div className="image positionRelative">
                    <AppImage {...imageProps}/>
                  </div>
                </Card>
              );
            })
          }
        </section>
        <RollButton onDiceRoll={props.onDiceRoll}/>
      </React.Fragment>
    );
  }
};
