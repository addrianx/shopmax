import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

new Vue({
    methods: {
        data: function() {
            console.log('ini adalah inheritance');
        }
    } //computed
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')