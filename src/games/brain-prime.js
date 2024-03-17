import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const settings = () => {
  const task = getRandomNumber(1, 10);
  let divider = 0;
  for (let i = 0; i <= task; i += 1) {
    if (task % i === 0) {
      divider += 1;
    }
  }
  const answer = divider === 2 ? 'yes' : 'no';
  console.log(answer);
  return { task, answer };
};

const brainPrimeSettings = () => startGame(description, settings);

export default brainPrimeSettings;
