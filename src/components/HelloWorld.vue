<template>
  <div class="column items-center">
    <h1>{{ msg }}</h1>
    <p><QBtn flat to="/a" color="primary" label="Go to page 404" /></p>
    <p><QBtn flat href="https://v3.vuejs.org/" target="_blank" color="primary" label="Vue3" /></p>
    <p><QBtn flat href="https://vitejs.dev/" target="_blank" color="primary" label="Vite" /></p>
    <p><QBtn flat href="https://pinia.vuejs.org/" target="_blank" color="primary" label="Pinia (de facto Vuex 5)" /></p>
    <p><QBtn flat href="https://next.router.vuejs.org/guide/" target="_blank" color="primary" label="Vue Router 4" /></p>
    <p><QBtn flat href="https://quasar.dev/" target="_blank" color="primary" label="Quasar" /></p>
    <p><QBtn flat href="https://materialdesignicons.com/" target="_blank" color="primary" label="Material design icons" /></p>
    <p><QBtn flat href="https://kazupon.github.io/vue-i18n/" target="_blank" color="primary" label="Vue I18n" /></p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      default: 'Hello World!',
    },
  },
};
</script>
