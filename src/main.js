import Vue from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from '@alex-arriaga/stencil-sg-virtual-2020/loader';

Vue.config.productionTip = false

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'sg'
Vue.config.ignoredElements = [/sg-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
