/* npm imports */
import uuid from "react-uuid";

/* app imports */
import { generateRandomNumbers } from "./generate-random-numbers.js";
import { getCardMap } from "./card-map.js";

export default function generateDeckOnRoll(setDeckOfCards, setIsLoading) {
  const cardMap = getCardMap();

  return () => {
    setIsLoading(true);
    const currentDeck = JSON.parse(window.localStorage.getItem("tenzies_deck"));
    const updatedDeck = currentDeck.reduce((composed, cardObject) => {
      let card = null;

      if (cardObject.isLocked) {
        card = Object.assign({}, cardObject);
      }
      else {
        let key = String(generateRandomNumbers(1, 10));
        card  = {
          id: uuid(),
          isLocked: false,
          name: cardMap[key].name,
          icon: cardMap[key].src
        };
      }

      composed.push(card);
      return composed;
    }, []);

    setTimeout(() => {
      setIsLoading(false);
      setDeckOfCards(updatedDeck);
      window.localStorage.setItem("tenzies_deck", JSON.stringify(updatedDeck));
    }, 2000);
  }
};
