import readlineSync from 'readline-sync';

import { random, readName } from '../index.js';

const simpleNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number === 0 || number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = () => {
  const userName = readName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.abs(random(100));
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === simpleNumber(number)) {
      console.log('Correct!');
    } else {
      const result = `${answer} is wrong answer ;(. Correct answer was ${simpleNumber(
        number,
      )}. \n Let's try again, ${userName}!`;
      console.log(result);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainPrime;
