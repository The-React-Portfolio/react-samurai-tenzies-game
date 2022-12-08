export default function checkIfGameComplete(currentDeck) {
  currentDeck = Object.assign({}, currentDeck);
  const arrayOfKeys = Object.keys(currentDeck);

  /* make the value check based on the first card in collection */
  const first = arrayOfKeys[0]
  const valueReference = currentDeck[first].name;

  const allSetAsLocked = arrayOfKeys.every((key) => {
    const card = currentDeck[key];
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
