<script setup lang="ts">
import useAppState from '~/stores/appState';

const appState = useAppState();
</script>

<template>
  <div class="column items-center">
    <h1>{{ msg }}</h1>
    <p>
      Recommended IDE setup:
      <QBtn flat href="https://code.visualstudio.com/" target="_blank" color="primary" label="VSCode" />
      +
      <QBtn flat href="https://github.com/johnsoncodehk/volar" target="_blank" color="primary" label="Volar" />
    </p>
    <p>
      See
      <code>README.md</code> for more information.
    </p>
    <p>
      <QBtn flat href="https://vitejs.dev/guide/features.html" target="_blank" color="primary" label="Vite Docs" />
      |
      <QBtn flat href="https://v3.vuejs.org/" target="_blank" color="primary" label="Vue 3 Docs" />
    </p>
    <QBtn type="button" @click="appState.counter++">count is: {{ appState.counter }}</QBtn>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
    },
  },
};
</script>
