export const checkIfGameComplete = (setIsGameComplete) => {
  /* get, iterate and check */
  const currentSelection = JSON.parse(window.localStorage.getItem("tenzies_deck"));

  /* make the value check based on the first card in collection */
  const valueReference = currentSelection[0].name;

  const allSetAsLocked = currentSelection.every((card) => {
    return card.name === valueReference && card.isLocked;
  });

  /* set state */
  if (allSetAsLocked) {
    setIsGameComplete(true);
  }
  else {
    setIsGameComplete(false);
  }
};
