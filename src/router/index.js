import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main/Main'
import Vision from '../components/Vision'
import History from '../components/History'
import Recruit from '../components/Recruit'
import Contact from '../components/Contact'
// program sub menu
import School from '../components/Program/School'
import Vivaldi from '../components/Program/Vivaldi'
import Kgongvi from '../components/Program/Kgongvi'
import Silkroad from '../components/Program/Silkroad'

// program > School sub menu
import VisionSchool from '../components/Program/School/VisionSchool'
import ParadigmSchool from '../components/Program/School/ParadigmSchool'
import EconomicSchool from '../components/Program/School/EconomicSchool'
import StartUpSchool from '../components/Program/School/StartUpSchool'


Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
      { path : '/', component : Main},
      { path: '/vision', component : Vision},
      { path: '/history', component : History},
      { path : '/recruit', component : Recruit},
      { path : '/contact', component : Contact},
      { path : '/program/school', component : School,
        children : [{path : 'vision', component : VisionSchool},
                    {path : 'paradigm', component : ParadigmSchool},
                    {path : 'economic', component : EconomicSchool},
                    {path : 'startup', component : StartUpSchool}
                  ]},
      { path : '/program/vivaldi', component : Vivaldi },
      { path : '/program/kgongvi', component : Kgongvi},
      { path : '/program/silkroad', component : Silkroad}
    ]
  })

  export default router