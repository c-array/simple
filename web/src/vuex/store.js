import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import queue from './modules/queue';
export default new Vuex.Store({
    modules:{
        queue 
    }
})