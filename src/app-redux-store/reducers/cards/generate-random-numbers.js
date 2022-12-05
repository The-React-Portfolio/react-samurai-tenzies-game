/**
  * helps to generate random numbers between 2 numbers. it will generate the numbers including the
  * min and max ranges
  */

export const generateRandomNumbers = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
