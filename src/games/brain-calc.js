import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const settings = () => {
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
  const stringTask = sumString[operand];
  const numberTask = sumNumber[operand];
  const task = `Question: ${stringTask}`;
  const answer = numberTask.toString();
  return { task, answer };
};

const brainCalcSettings = () => startGame(description, settings);

export default brainCalcSettings;
