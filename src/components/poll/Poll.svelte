<script>
  import NavStore from '../../stores/NavStore';
  import PollList from './PollList.svelte';
  import CreateForm from './CreateForm.svelte';

  $: activeItem = $NavStore.activeItem;
</script>

{#if activeItem === 'Current Polls'}
  <PollList />
{:else if activeItem === 'Add New Poll'}
  <CreateForm on:addPoll={() =>
    NavStore.update((current) =>
      ({ ...current, activeItem: 'Current Polls' }))}
  />
{/if}
