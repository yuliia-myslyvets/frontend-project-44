import readlineSync from 'readline-sync';

import { random, readName } from '../index.js';

const brainEven = () => {
  const userName = readName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = random(100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (
      (number % 2 === 0 && answer === 'yes')
      || (number % 2 !== 0 && answer === 'no')
    ) {
      console.log('Correct!');
    } else {
      const incorrect = answer === 'yes' ? 'no' : 'yes';
      const result = `${answer} is wrong answer ;(. Correct answer was ${incorrect}. \n Lets try again, ${userName}!`;
      console.log(result);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
