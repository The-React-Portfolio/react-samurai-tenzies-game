/**
  * helps to generate a map of cards that are used in the application
  */

import aceOfSpades from "@appImages/samurai-01.svg";
import twoOfSpades from "@appImages/samurai-02.svg";
import threeOfSpades from "@appImages/samurai-03.svg";
import fourOfSpades from "@appImages/samurai-04.svg";
import fiveOfSpades from "@appImages/samurai-05.svg";
import sixOfSpades from "@appImages/samurai-06.svg";
import sevenOfSpades from "@appImages/samurai-07.svg";
import eightOfSpades from "@appImages/samurai-08.svg";
import nineOfSpades from "@appImages/samurai-09.svg";
import tenOfSpades from "@appImages/samurai-10.svg";

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
  };
  return Object.assign({}, cardMap);
};
