export const setCardAsLocked = (cardId) => {
  /* get */
  let currentSelection = JSON.parse(window.localStorage.getItem("tenzies_deck"));

  /* iterate and update */
  let updatedSelection = currentSelection.reduce((composed, card) => {
    let newCard = Object.assign({}, card);
    newCard.isLocked = (newCard.id === cardId) ? true : newCard.isLocked;
    composed.push(newCard);
    return composed;
  }, []);

  /* set and end */
  window.localStorage.setItem("tenzies_deck", JSON.stringify(updatedSelection));
};
