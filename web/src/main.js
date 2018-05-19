// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store';

Vue.config.productionTip = false;


//引入vux UI组件库
import {
  DatetimePlugin,
  Group,
  XSwitch,
  XButton,
  XHeader,
  Selector,
  Cell,
  Grid,
  GridItem,
  XInput,
  XTextarea,
  Card,
  DatetimeView,
  DatetimeRange,
  Popup,
  PopupHeader,
  Msg,
  dateFormat } from 'vux';
Vue.component('x-switch', XSwitch);
Vue.component('group', Group);
Vue.component('x-button', XButton);
Vue.component('x-header', XHeader);
Vue.component('selector', Selector);
Vue.component('cell', Cell);
Vue.component('grid', Grid);
Vue.component('grid-item', GridItem);
Vue.component('x-input', XInput);
Vue.component('x-textarea', XTextarea);
Vue.component('card', Card);
Vue.component('datetime-view', DatetimeView);
Vue.component('datetime-range', DatetimeRange);
Vue.component('popup', Popup);
Vue.component('popup-header', PopupHeader);
Vue.component('msg', Msg);
Vue.use(DatetimePlugin);

import dateDiff from "./assets/tools/dateDiff";
Vue.prototype.$dateDiff = dateDiff;
Vue.prototype.$dateFormat = dateFormat;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
