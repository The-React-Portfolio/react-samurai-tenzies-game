/**
  * list of actions and their respective payloads (if applicable) for the cards feature in the redux
  * state
  */

const BASE_STRING = "game";

export const checkIfGameIsComplete = () => {
  return {
    type: `${BASE_STRING}/CHECK_IF_COMPLETE`,
    payload: {}
  };
};
