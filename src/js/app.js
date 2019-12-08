import Vue from 'vue';
import root from './views/root.vue';
import _pkg from '../../package.json';
export const pkg = _pkg;

const v = new Vue({
    components: {
        'app-root': root
    }
}).$mount('#app');