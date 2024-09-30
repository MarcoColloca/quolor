import { createWebHistory, createRouter } from 'vue-router'

import { store } from './store'


// Import delle Pagine dell'Applicativo
import AppHome from './pages/AppHome.vue'
import AppNotFound from './pages/AppNotFound.vue'
import AppMap from './pages/AppMap.vue'


// Creazione delle Rotte

const routes = [

    { 
        path: '/', name:'home', component:AppHome 
    },

    { 
        path: '/map', name:'map', component:AppMap 
    },
     
    {   // will match everything and put it under `route.params.pathMatch`
        path: '/:pathMatch(.*)*', name: 'NotFound', component: AppNotFound 
    },

]


const router = createRouter({

    history: createWebHistory(),

    routes: routes,

})


// Guard beforeEach → Controlla i cambiamenti nelle rotte.
router.beforeEach((to, from) => {
    // Se la rotta ha nome 'NotFound', imposta notFound su true nello store
    if (to.name === 'NotFound') {
        store.notFound = true;
    } else {
        store.notFound = false;
    }    
})


export default router