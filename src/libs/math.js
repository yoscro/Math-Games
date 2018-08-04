export const isEven = num => num % 2 === 0;
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const findGCD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};
export const getNumberBalanced = (num) => {
  const biggestNum = Math.max(...num);
  const lowestNum = Math.min(...num);
  const sortedNums = num.sort().slice(1, num.length - 1);
  if ((biggestNum - lowestNum) <= 1) {
    return num.sort();
  }
  return getNumberBalanced([biggestNum - 1, lowestNum + 1, ...sortedNums]);
};
