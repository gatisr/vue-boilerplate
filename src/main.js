// FILE: main.js

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/mdi-v6';
import { createI18n } from 'vue-i18n';

// Import icon libraries; you can choose different ones!
// See: https://quasar.dev/start/vite-plugin#using-quasar
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css';
import '@quasar/extras/mdi-v6/mdi-v6.css';

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import 'quasar/src/css/index.sass';

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from '~/App.vue';
import router from '~/router';
import lv from '~/locales/lv.json';

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // https://quasar.dev/quasar-plugins
  iconSet: quasarIconSet,
  /*
      config: {
        brand: {
          // primary: '#e46262',
          // ... or all other brand colors
        },
        notify: {...}, // default set of options for Notify Quasar plugin
        loading: {...}, // default set of options for Loading Quasar plugin
        loadingBar: { ... }, // settings for LoadingBar Quasar plugin
        // ..and many more (check Installation card on each Quasar component/directive/plugin)
      }
      */
});

myApp.use(createPinia());
myApp.use(router);

const i18n = createI18n({
  locale: 'lv',
  messages: {
    lv,
  },
});
myApp.use(i18n);
myApp.mount('#app');
