/* react imports */
import React, { useState, useEffect } from "react";

/* app imports */
import generateFreshDeck from "./generate-fresh-deck.js";
import generateDeckOnRoll from "./generate-deck-on-roll.js";

export const useCardsHook = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [deckOfCards, setDeckOfCards] = useState([]);

  /* once after loading - with a dummy delayed effect */
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setDeckOfCards(generateFreshDeck());
    }, 2000);
  }, []);

  return {
    isLoading,
    deckOfCards,
    onDiceRoll: generateDeckOnRoll(setDeckOfCards, setIsLoading)
  };
};