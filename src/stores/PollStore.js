import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: 'What is your favorite language?',
    choices: {
      a: {
        answer: 'JavaScript',
        votes: 7
      },
      b: {
        answer: 'Python',
        votes: 5
      }
    }
  },
  {
    id: 2,
    question: 'What is your favorite framework?',
    choices: {
      a: {
        answer: 'Express',
        votes: 5
      },
      b: {
        answer: 'Flask',
        votes: 4
      }
    }
  }
]);

export default PollStore;
