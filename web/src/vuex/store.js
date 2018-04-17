import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import queue from './modules/queue';
import myEvaluate from './modules/my/evaluate';
export default new Vuex.Store({
    modules:{
        queue,
        myEvaluate 
    }
})