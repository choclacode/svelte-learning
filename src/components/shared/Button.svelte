<script>
  export let type = 'primary';
  export let flat = false;
  export let inverse = false;
</script>

<button
  class={type}
  class:flat={flat}
  class:inverse={inverse}
  on:click
>
  <slot></slot>
</button>

<style>
  button {
    width: fit-content;
    padding: 8px 12px;
    border: 0;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  button.primary {
    background-color: var(--primary);
    color: #f9f9f9;
  }
  button.primary.inverse {
    background-color: #fff;
    color: var(--primary);
    border: 3px solid var(--primary);
  }
  button.secondary {
    background-color: var(--secondary);
    color: #f9f9f9;
  }
  button.secondary.inverse {
    background-color: #fff;
    color: var(--secondary);
    border: 3px solid var(--secondary);
  }
  button.flat {
    box-shadow: none;
  }
</style>
