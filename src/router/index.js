import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main/Main'
import Vision from '../components/Vision'
import History from '../components/History'
import Program from '../components/Program'
import Recruit from '../components/Recruit'
import Contact from '../components/Contact'


Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
      { path : '/', component : Main},
      { path: '/vision', component : Vision},
      { path: '/history', component : History},
      { path : '/program', component : Program},
      { path : '/recruit', component : Recruit},
      { path : '/contact', component : Contact}
    ]
  })

  export default router