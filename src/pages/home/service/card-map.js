/**
  * helps to generate a map of cards that are used in the application
  */

import aceOfSpades from "@appImages/ace-of-spades.svg";
import twoOfSpades from "@appImages/2-of-spades.svg";
import threeOfSpades from "@appImages/3-of-spades.svg";
import fourOfSpades from "@appImages/4-of-spades.svg";
import fiveOfSpades from "@appImages/5-of-spades.svg";
import sixOfSpades from "@appImages/6-of-spades.svg";
import sevenOfSpades from "@appImages/7-of-spades.svg";
import eightOfSpades from "@appImages/8-of-spades.svg";
import nineOfSpades from "@appImages/9-of-spades.svg";
import tenOfSpades from "@appImages/10-of-spades.svg";
import jackOfSpades from "@appImages/jack-of-spades.svg";
import queenOfSpades from "@appImages/queen-of-spades.svg";
import kingOfSpades from "@appImages/king-of-spades.svg";

export const getCardMap = () => {
  const cardMap = {
    "1": aceOfSpades,
    "2": twoOfSpades,
    "3": threeOfSpades,
    "4": fourOfSpades,
    "5": fiveOfSpades,
    "6": sixOfSpades,
    "7": sevenOfSpades,
    "8": eightOfSpades,
    "9": nineOfSpades,
    "10": tenOfSpades,
    "11": jackOfSpades,
    "12": queenOfSpades,
    "13": kingOfSpades
  };
  return Object.assign({}, cardMap);
};
