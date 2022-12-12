import readlineSync from 'readline-sync';

import { random, readName } from '../index.js';

export const correctAnswer = (number1, number2) => {
  const min = number1 < number2 ? number1 : number2;
  for (let i = min; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return 1;
};

export const brainGcd = () => {
  const userName = readName();
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.abs(random(100));
    const number2 = Math.abs(random(100));
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === correctAnswer(number1, number2)) {
      console.log('Correct!');
    } else {
      const result = `${answer} is wrong answer ;(. Correct answer was ${correctAnswer(
        number1,
        number2,
      )}. \n Lets try again, ${userName}!`;
      console.log(result);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
