import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main/Main'
import Vision from '../components/Vision'


Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
      { path : '/', component : Main},
      { path: '/vision', component : Vision}
    ]
  })

  export default router