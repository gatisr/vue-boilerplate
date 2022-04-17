<template>
  <QLayout view="hHh LpR fFf">
    <QHeader reveal bordered height-hint="98">
      <QToolbar>
        <QToolbarTitle>{{ $t("global.siteName") }}</QToolbarTitle>
        <QBtn v-on:click="$q.dark.toggle" flat round dense icon="mdi-theme-light-dark" />
      </QToolbar>
      <QTabs align="center">
        <QRouteTab to="/" label="Home" />
        <QRouteTab to="about" label="About" />
      </QTabs>
    </QHeader>
    <QPageContainer>
      <router-view />
    </QPageContainer>
    <QFooter reveal bordered class="bg-grey-11 text-white">
      <QToolbar>
        <QToolbarTitle align="right">
          <QChip clickable icon="mdi-github" v-on:click="openGithub">
            gatisr
          </QChip>
        </QToolbarTitle>
      </QToolbar>
    </QFooter>
  </QLayout>
</template>

<script setup lang="ts">
import { openURL } from 'quasar';

const openGithub = () => openURL('https://github.com/gatisr');
</script>

<style type="text/css">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");
</style>
