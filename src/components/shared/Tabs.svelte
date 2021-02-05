<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<nav class="tabs">
  <ul>
    {#each items as item (item)}
      <li>
        <div
          class:active={item === activeItem}
          on:click={() => dispatch('tabChange', item)}
        >{item}</div>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .tabs {
    max-width: 270px;
    margin: 0 auto 40px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div {
    color: #aaa;
    cursor: pointer;
    padding: 7.5px;
    border-bottom: 2px solid #f9f9f9;
  }
  .active {
    color: #4d2f14;
    border-bottom-color: #4d2f14;
  }
</style>
