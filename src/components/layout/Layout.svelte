<script>
  import Header from './Header.svelte';
  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';
</script>

<Header />
<main>
  <Navbar />
  <slot></slot>
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
