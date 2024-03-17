import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const settings = () => {
  let a = getRandomNumber(1, 20);
  let b = getRandomNumber(1, 20);
  const task = `${a}, ${b}`;
  let answer = 0;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  answer = a.toString();
  return { task, answer };
};

const brainGCDSettings = () => startGame(description, settings);

export default brainGCDSettings;
