import readlineSync from 'readline-sync';

const start = (description, settings) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const roundGame = 3;
  console.log(description);
  for (let round = roundGame; round !== 0; round -= 1) {
    const { answer, task } = settings();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default start;
