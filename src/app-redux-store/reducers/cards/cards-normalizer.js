/**
  * adviced best practice from redux docs for storage of data in the redux store
  **/

export const arrayToObjectNormalizer = (arrayOfCards) => {
  return arrayOfCards.reduce((composed, card) => {
    let key = card.id;
    composed[key] = card;
    return composed;
  }, {});
};
