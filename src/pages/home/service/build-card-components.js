/* react imports */
import React from "react";

/* app imports */
import {Card} from "@components/cards/component.js";
import {AppImage} from "@components/app-image/component.js";

export default function buildCardComponents(arrayOfCards) {
  let data = arrayOfCards.splice(0);

  /* build and return */
  return data.reduce((composed, cardObject, index) => {
    const imageProps = {
      src: cardObject.icon,
      alt: cardObject.name,
      title: cardObject.name
    };

    /* create */
    const item = (
      <Card key={index} isLocked={cardObject.isLocked }>
        <div className="image positionRelative">
          <AppImage {...imageProps}/>
        </div>
      </Card>
    );

    composed.push(item);
    return composed;
  }, []);
}
