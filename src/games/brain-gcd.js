import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const settings = () => {
  let firstNumber = getRandomNumber(1, 20);
  let secondNumber = getRandomNumber(1, 20);
  const task = `${firstNumber} ${secondNumber}`;
  let answer = 0;
  const gcd = () => {
    while (firstNumber !== secondNumber) {
      if (firstNumber > secondNumber) {
        firstNumber -= secondNumber;
      } else {
        secondNumber -= firstNumber;
      }
    }
    return firstNumber;
  };
  answer = gcd(firstNumber, secondNumber).toString();
  return { task, answer };
};

const brainGCDSettings = () => startGame(description, settings);

export default brainGCDSettings;
