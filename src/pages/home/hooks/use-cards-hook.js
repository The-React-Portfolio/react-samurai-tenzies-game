/* node module imports */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/* app imports */
import { createFreshCards, rollDice } from "@appReduxStore/reducers/cards/index.js";

export const useCardsHook = () => {
  /* component level state management */
  let [isLoading, setIsLoading] = useState(true);

  /* derives data from redux store */
  const deckOfCards = useSelector((state) => {
    return Object.keys(state.cards).reduce((composed, id) => {
      composed.push(state.cards[id]);
      return composed;
    }, []);
  });

  /* creates required instance for sending action to redux store */
  const dispatchToReduxStore = useDispatch();

  /* event handler */
  const onDiceRoll = () => {
    setIsLoading(true);
    let action = rollDice(setIsLoading);
    dispatchToReduxStore(action);
  };

  /* load data from here */
  useEffect(() => {
    let action = createFreshCards(setIsLoading);
    dispatchToReduxStore(action);
  }, []);

  return {
    isLoading,
    setIsLoading,
    deckOfCards,
    onDiceRoll
  };
};
