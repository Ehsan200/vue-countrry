import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ArrayDetail from "@/components/detail/ArrayDetail";
import CountryDetail from "@/components/detail/CountryDetail";
import ObjectDetail from "@/components/detail/ObjectDetail";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('CountryDetail', CountryDetail)
Vue.component('ObjectDetail', ObjectDetail)
Vue.component('ArrayDetail', ArrayDetail)


new Vue({
    render: h => h(App)
}).$mount('#app')
