import readlineSync from 'readline-sync';
import getName from './cli.js';

const start = (description, settings) => {
  const roundGame = 3;
  let winCount = 0;
  const name = getName();
  console.log(description);
  for (let round = roundGame; round !== 0; round -= 1) {
    const { answer, task } = settings();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
      break;
    }
  }
  if (winCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default start;
