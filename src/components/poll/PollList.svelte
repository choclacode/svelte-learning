<script>
  import { fade, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import PollStore from '../../stores/PollStore.js';
  import PollDetails from "./PollDetails.svelte";
</script>

<div class="polls" class:grid={$PollStore.length > 0}>
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {:else}
    <p in:fade>No polls to show :)</p>
  {/each}
</div>

<style>
  .polls {
    display: grid;
    gap: 80px;
    margin: 20px;
    padding: 20px;
  }
  .grid {
    grid-template-columns: 1fr 1fr;
  }
  p {
    text-align: center;
    line-height: 50%;
    color: var(--primary);
    font-size: 1.4rem;
    font-weight: bold;
  }
</style>
