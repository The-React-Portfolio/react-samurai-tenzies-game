/**
  * adviced best practice from redux docs for storage of data in the redux store
  **/

/* node module imports */
import produce from "immer";

export const arrayToObjectNormalizer = (arrayOfCards) => {
  let normalized = produce(arrayOfCards, (draft) => {
    return draft.reduce((composed, card) => {
      let key = card.id;
      composed[key] = card;
      return composed;
    }, {});
  });
  return normalized;
};
