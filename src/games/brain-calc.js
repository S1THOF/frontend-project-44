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
  const task = `Question: ${sumString[operand]}`;
  const answer = sumNumber[operand].toString();
  return { task, answer };
};

const brainCalcSettings = () => startGame(description, settings);

export default brainCalcSettings;
