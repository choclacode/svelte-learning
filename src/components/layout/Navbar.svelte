<script>
  import NavStore from '../../stores/NavStore.js';
  import Tabs from '../shared/Tabs.svelte';
</script>

<Tabs
  items={$NavStore.items} activeItem={$NavStore.activeItem}
  on:tabChange={({ detail: activeItem }) => {
    NavStore.update((current) => ({ ...current, activeItem }));
  }}
/>
