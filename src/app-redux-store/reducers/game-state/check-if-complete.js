export default function checkIfGameComplete(currentSelection) {
  /* make the value check based on the first card in collection */
  const valueReference = currentSelection[0].name;

  const allSetAsLocked = currentSelection.every((card) => {
    return card.name === valueReference && card.isLocked;
  });

  /* set state */
  if (allSetAsLocked) {
    return true;
  }
  else {
    return false;
  }
};
