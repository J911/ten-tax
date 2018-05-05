import VueRouter from 'vue-router'
import Home from '../spa/Home.vue'

const routes = [
    { 
        path: '/', 
        component: Home,
        meta: {
            title: 'ten-tax'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes 
})

router.beforeEach(function (to, from, next) {
    if(to.meta && to.meta.title){
      document.title = to.meta.title;
    }
    return next();
});

export default router