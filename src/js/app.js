import Vue from 'vue';
import root from './views/root.vue';
const v = new Vue({
    components: {
        'app-root': root
    }
}).$mount('#app');