import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const settings = () => {
  let task = [];
  const startNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const lostNumber = getRandomNumber(1, 2);

  task.push(startNumber);
  for (let i = 0; i < 9; i += 1) {
    task.push(task[i] + step);
  }
  const answer = task[lostNumber].toString();
  task[lostNumber] = '..';
  task = task.join(' ');

  return { task, answer };
};

const brainProgressionSettings = () => startGame(description, settings);

export default brainProgressionSettings;
