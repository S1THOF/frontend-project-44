import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const brainEven = () => {
  let winRound = true;
  let winCount = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (winRound === true && winCount !== 3) {
    const task = getRandomNumber();
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = task % 2 === 0 ? 'yes' : 'no';
    if (answer === isEven) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'. Let's try again, ${name}!`);
      winRound = false;
    }
  }
  const congratulation = winCount === 3 ? `Congratulations, ${name}!` : null;
  console.log(congratulation);
};

export default brainEven;
