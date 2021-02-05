<script>
  import { tweened } from 'svelte/motion';
  import PollStore from '../../stores/PollStore';
  import Card from '../shared/Card.svelte';
  import Button from '../shared/Button.svelte';

  export let poll;

  const choices = Object.values(poll.choices);
  const [tweenedA, tweenedB] = [tweened(0), tweened(0)];

  const getChoice = (choice) => choices.indexOf(choice) === 0 ? 'a' : 'b';
  const isA = (choice) => getChoice(choice) === 'a';
  const vote = (choice, id) => () => PollStore.update((current) => {
    const copied = current;
    const upvoted = copied.find((poll) => poll.id === id);
    upvoted.choices[choice].votes++;

    return copied;
  });

  $: votesA = poll.choices.a.votes;
  $: votesB = poll.choices.b.votes;
  $: totalVotes = votesA + votesB;
  $: percentA = (votesA / totalVotes * 100) || 0;
  $: percentB = (votesB / totalVotes * 100) || 0;

  $: {
    tweenedA.set(percentA);
    tweenedB.set(percentB);
  };
</script>

<Card>
  <h3 class="question">{poll.question}</h3>
  <p>Total votes: {totalVotes}</p>
  <ul>
    {#each choices as choice (choice.answer)}
      <li class="answer" on:click={vote(getChoice(choice), poll.id)}>
        <div class="percent {getChoice(choice)}"
          style="width: {isA(choice) ? $tweenedA : $tweenedB}%"
        ></div>
        <span>{choice.answer} ({isA(choice) ? votesA : votesB})</span>
      </li>
    {/each}
  </ul>
  <div class="delete">
    <Button
      type={Math.random() > 0.5 ? 'primary' : 'secondary'}
      inverse={Math.random() > 0.5}
      on:click={() => PollStore.update((current) =>
        current.filter(({ id }) => poll.id !== id))}
    >Delete Poll</Button>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    margin-bottom: 30px;
    color: #aaa;
    font-size: 15px;
  }
  .answer {
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
    border-radius: 6px;
  }
  .answer:hover {
    opacity: 0.6;
  }
  .answer .percent {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-left: 4px solid #0000;
    box-sizing: border-box;
    pointer-events: none;
  }
  .answer .percent.a {
    border-left-color: var(--primary);
    background-color: rgba(77, 47, 20, 0.2);
  }
  .answer .percent.b {
    border-left-color: var(--secondary);
    background-color: rgba(95, 31, 92, 0.2);
  }
  .answer span {
    display: inline-block;
    padding: 10px 20px;
  }
  .delete {
    width: fit-content;
    margin: 30px auto 20px;
  }
</style>
