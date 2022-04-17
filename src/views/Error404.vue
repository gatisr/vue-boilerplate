<template>
  <div class="full-width row wrap justify-start items-start content-start">
    <div class="col self-center justify-center">
      <div class="row justify-center">
        <QIcon name="mdi-emoticon-sad-outline" color="warning" size="200px" />
      </div>
      <div class="row justify-center">
        <h6 v-html="$t('global.page.notFound')" />
      </div>
      <div class="row justify-center q-gutter-sm">
        <QBtn
          @click="$router.back()"
          rounded
          outline
          color="primary"
          :label="$t('global.page.goBack')"
        />
        <QBtn to="/" color="primary" rounded  :label="$t('global.page.goHome')" />
      </div>
    </div>
  </div>
</template>
