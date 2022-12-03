/* node module imports */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/* app imports */
import generateDeckOnRoll from "../service/generate-deck-on-roll.js";
import { createFreshCardsAction } from "@appReduxStore/actions/card-actions.js";

export const useCardsHook = () => {
  let [isLoading, setIsLoading] = useState(true);
  const deckOfCards = useSelector((state) => {
    return state.cards;
  });
  const dispatchToReduxStore = useDispatch();

  /* load data from here */
  useEffect(() => {
    let action = createFreshCardsAction();
    action.setIsLoading = setIsLoading;
    dispatchToReduxStore(action);
  }, []);

  return {
    isLoading,
    setIsLoading,
    deckOfCards,
    //onDiceRoll: generateDeckOnRoll(setDeckOfCards, setIsLoading),
  };
};
