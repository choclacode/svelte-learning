import { writable } from 'svelte/store';

const NavStore = writable({
  items: ['Current Polls', 'Add New Poll'],
  activeItem: 'Current Polls'
});

export default NavStore;
