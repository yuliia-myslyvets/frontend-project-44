import readlineSync from 'readline-sync';

import { random, readName } from '../index.js';

const getRandomOperator = () => {
  const operatorArray = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operatorArray.length);
  const operator = operatorArray[index];
  return operator;
};

const brainCalc = () => {
  const userName = readName();
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = random(10);
    const number2 = random(10);
    let calculation = 0;
    const selectedOperator = getRandomOperator();
    console.log(`Question: ${number1} ${selectedOperator} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line default-case
    switch (selectedOperator) {
      case '+':
        calculation = number1 + number2;
        break;
      case '-':
        calculation = number1 - number2;
        break;
      case '*':
        calculation = number1 * number2;
        break;
    }
    if (Number(answer) === calculation) {
      console.log('Correct!');
    } else {
      const incorrect = `${answer} is wrong answer ;(. Correct answer was ${calculation}.\nLet's try again, ${userName}!`;
      console.log(incorrect);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainCalc;
