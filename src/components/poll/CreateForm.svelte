<script>
  import { createEventDispatcher } from 'svelte';
  import PollStore from '../../stores/PollStore.js';
  import Button from '../shared/Button.svelte';

  const dispatch = createEventDispatcher();

  let fields = { question: '', answerA: '', answerB: '' };
  let errors = { question: '', answerA: '', answerB: '' };
  let valid = { question: 0, answerA: 0, answerB: 0 };

  const handleError = (
    value,
    msg = `Please enter Answer ${value.charAt(value.length - 1)}`,
    cond = fields[value].match(/^\s*$/g)
  ) => {
    if (cond) {
      valid[value] = -1;
      errors[value] = msg;
    } else {
      valid[value] = 1;
      errors[value] = '';
    }
  }

  const addPoll = () => {
    valid = { question: 1, answerA: 1, answerB: 1 };

    handleError(
      'question', 'Question must be at least 5 chars long',
      fields.question.trim().length < 5
    );
    handleError('answerA');
    handleError('answerB');

    if (valid.question === 1 && valid.answerA === 1 && valid.answerB === 1) {
      const { question, answerA, answerB } = fields;
      const poll = {
        question,
        choices: {
          a: { answer: answerA, votes: 0 },
          b: { answer: answerB, votes: 0 },
        },
        id: Math.random() * Math.random()
      };
      PollStore.update((current) => [...current, poll]);
      dispatch('addPoll');
    }
  }
</script>

<form on:submit|preventDefault={addPoll}>
  <div class="input-field"
    class:valid={valid.question === 1}
    class:invalid={valid.question === -1}
  >
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question}>
    {#if errors.question}
      <p class="error">{errors.question}</p>
    {/if}
  </div>
  <div class="input-field"
    class:valid={valid.answerA === 1}
    class:invalid={valid.answerA === -1}
  >
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA}>
    {#if errors.answerA}
      <p class="error">{errors.answerA}</p>
    {/if}
  </div>
  <div class="input-field"
    class:valid={valid.answerB === 1}
    class:invalid={valid.answerB === -1}
  >
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB}>
    {#if errors.answerB}
      <p class="error">{errors.answerB}</p>
    {/if}
  </div>
  <div class="input-field">
    <Button inverse={true}>Add Poll</Button>
  </div>
</form>

<style>
  form {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .input-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 270px;
    margin: 15px auto 8px;
  }
  label {
    margin-bottom: 10px;
    align-self: flex-start;
  }
  input {
    width: 95%;
    padding: 10px;
    border: 0.5px solid #ccc;
    outline: none;
    border-radius: 6px;
  }
  .input-field.valid input {
    border-color: greenyellow;
  }
  .input-field.invalid input {
    border-color: crimson;
  }
  .error {
    color: crimson;
    font-size: 0.8rem;
    font-weight: bold;
    align-self: flex-start;
  }
</style>
