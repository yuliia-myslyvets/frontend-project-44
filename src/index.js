import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const random = (max) => Math.floor(Math.random() * max);

export const readName = () => {
  const userName = readlineSync.question('May I have your name?');
  return userName;
};
