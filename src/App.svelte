<script>
  import Layout from './components/layout/Layout.svelte';
  import Navbar from './components/layout/Navbar.svelte';
  import Poll from './components/poll/Poll.svelte';
</script>

<Layout>
  <Navbar />
  <Poll />
  <!-- <Poll {activeItem} {polls}
    on:addPoll={({ detail }) => {
      polls = [...polls, detail];
      activeItem = 'Current Polls';
    }}
    on:vote={({ detail: { choice, id } }) => {
      const copiedPolls = [...polls];
      const upvotedPoll = copiedPolls.find(poll => poll.id === id);
      upvotedPoll.choices[choice].votes++;
      polls = copiedPolls;
    }}
  /> -->
</Layout>
