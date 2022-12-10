import readlineSync from 'readline-sync';

import { random, readName } from '../index.js';

const arithmProgression = (number1, step) => {
  const arithmProgressionArray = [];
  for (let i = 0; i <= 10; i++) {
    const number = number1 + step * i;
    arithmProgressionArray.push(number);
  }
  return arithmProgressionArray;
};

const brainProgression = () => {
  const userName = readName();
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.abs(random(10));
    const step = Math.abs(random(10));
    const arithmProgressionArray = arithmProgression(number1, step);
    const unkownMemberIndex = Math.abs(random(10));
    const rightAnswer = arithmProgressionArray[unkownMemberIndex];
    arithmProgressionArray[unkownMemberIndex] = '..';
    const question = arithmProgressionArray.join('  ');
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!');
    } else {
      const incorrect = `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`;
      console.log(incorrect);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainProgression;
