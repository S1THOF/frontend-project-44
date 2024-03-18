import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';
const createProgression = (task, step) => {
  for (let i = 0; i < 9; i += 1) {
    task.push(task[i] + step);
  }
  return task;
};

const settings = () => {
  let task = [];
  const startNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const lostNumber = getRandomNumber(1, 10);

  task.push(startNumber);
  createProgression(task, step);
  const answer = task[lostNumber].toString();
  task[lostNumber] = '..';
  task = task.join(' ');

  return { task, answer };
};

const brainProgressionSettings = () => startGame(description, settings);

export default brainProgressionSettings;
