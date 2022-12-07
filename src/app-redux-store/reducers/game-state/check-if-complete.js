export default function checkIfGameComplete(currentSelection) {
  const arrayOfKeys = Object.keys(currentSelection);

  /* make the value check based on the first card in collection */
  const first = arrayOfKeys[0]
  const valueReference = currentSelection[first].name;

  const allSetAsLocked = arrayOfKeys.every((key) => {
    const card = currentSelection[key];
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
