<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<Header />
<main>
  <slot></slot>
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
