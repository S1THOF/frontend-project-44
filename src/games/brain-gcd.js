import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (firstNumber, secondNumber) => {
  let first = firstNumber;
  let second = secondNumber;
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }
  return first;
};

const settings = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const task = `${firstNumber} ${secondNumber}`;
  let answer = 0;
  answer = gcd(firstNumber, secondNumber).toString();
  return { task, answer };
};

const brainGCDSettings = () => startGame(description, settings);

export default brainGCDSettings;
