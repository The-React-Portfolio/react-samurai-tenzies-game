export const checkIfGameComplete = (setIsGameComplete) => {
  /* get, iterate and check */
  const currentSelection = JSON.parse(window.localStorage.getItem("tenzies_deck"));
  const allSetAsLocked = currentSelection.every((card) => {
    return card.isLocked === true;
  });

  /* set state */
  if (allSetAsLocked) {
    setIsGameComplete(true);
  }
  else {
    setIsGameComplete(false);
  }
};
