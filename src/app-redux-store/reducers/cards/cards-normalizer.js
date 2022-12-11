/**
  * adviced best practice from redux docs for storage of data in the redux store
  **/

export const arrayToObjectNormalizer = (arrayOfCards) => {
  let normalized = arrayOfCards.reduce((composed, card) => {
    let key = card.id;
    composed[key] = card;
    return composed;
  }, {});
  return normalized;
};
