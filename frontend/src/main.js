/**
 * Vue
 * @library
 */
// Lib imports
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

// Plugins
import media from '@/plugins/media'

// Global Components
import '@/components/global'

// Tailwind Styles
import '@/assets/tailwind-styles.css'
// Custom Styles
import '@/sass/app-style.scss'

// Application imports
import App from './App'
import store from '@/store'
import router from '@/router'
import { AppConstant } from './services/utils'

sync(store, router)
Vue.use(media)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  mq: {
    ...AppConstant.MEDIA
  },
  render: h => h(App)
}).$mount('#app')
