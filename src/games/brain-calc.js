import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const brainEven = () => {
  let winCount = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let round = 0; round <= 2; round += 1) {
    const firstNumber = getRandomNumber(1, 10);
    const secondNumber = getRandomNumber(1, 10);
    const operand = getRandomNumber(0, 3);
    const sumString = [
      `${firstNumber} + ${secondNumber}`,
      `${firstNumber} - ${secondNumber}`,
      `${firstNumber} * ${secondNumber}`,
    ];
    const sumNumber = [
      firstNumber + secondNumber,
      firstNumber - secondNumber,
      firstNumber * secondNumber,
    ];
    console.log(`Question: ${sumString[operand]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === sumNumber[operand].toString()) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${sumNumber[operand]}'. `);
      break;
    }
  }
  const congratulation = winCount === 3 ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(congratulation);
};

export default brainEven;
