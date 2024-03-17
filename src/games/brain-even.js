import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (task) => (task % 2 === 0);

const settings = () => {
  const number = getRandomNumber(1, 100);
  const task = number;
  const answer = isEven(task) === true ? 'yes' : 'no';
  return { task, answer };
};

const brainEvenSettings = () => startGame(description, settings);

export default brainEvenSettings;
