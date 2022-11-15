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
    "1": {name: "Ace of Spades", src: aceOfSpades},
    "2": {name: "Two of Spades", src: twoOfSpades},
    "3": {name: "Three of Spades", src: threeOfSpades},
    "4": {name: "Four of Spades", src: fourOfSpades},
    "5": {name: "Five of Spades", src: fiveOfSpades},
    "6": {name: "Six of Spades", src: sixOfSpades},
    "7": {name: "Seven of Spades", src: sevenOfSpades},
    "8": {name: "Eight of Spades", src: eightOfSpades},
    "9": {name: "Nine of Spades", src: nineOfSpades},
    "10": {name: "Ten of Spades", src: tenOfSpades},
    "11": {name: "Jack of Spades", src: jackOfSpades},
    "12": {name: "Queen of Spades", src: queenOfSpades},
    "13": {name: "King of Spades", src: kingOfSpades}
  };
  return Object.assign({}, cardMap);
};
