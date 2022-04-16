import { defineStore } from 'pinia';

export default defineStore('appState', {
  state: () => ({
    counter: 0,
  }),
});
