import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
     {
       path:"/",
       redirect:"/home"
     },{
       path:"/home",
       component:() => import("@/pages/Home/Home"),
       children:[{
         path:"/home/menu",
         component:() => import("@/pages/Menu/Menu"),
       },
       {
         path:"/home/menu/add",
         component:() => import("@/pages/Menu/Menuadd")
       }
      ]
     }
  ]
})
