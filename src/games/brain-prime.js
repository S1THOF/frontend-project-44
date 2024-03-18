import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (task) => {
  let divider = 0;
  for (let i = 0; i <= task; i += 1) {
    if (task % i === 0) {
      divider += 1;
    }
  }
  return divider === 2;
};

const settings = () => {
  const task = getRandomNumber(1, 10);
  const answer = isPrime(task) ? 'yes' : 'no';
  console.log(answer);
  return { task, answer };
};

const brainPrimeSettings = () => startGame(description, settings);

export default brainPrimeSettings;
