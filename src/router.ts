import { createWebHistory, createRouter } from 'vue-router'

import { useMainStore } from './stores/mainStore';  // Importa lo store di Pinia


// Import delle Pagine dell'Applicativo
//import AppHome from './pages/AppHome.vue'
import AppNotFound from './pages/AppNotFound.vue'
//import AppMap from './pages/AppMap.vue'


// Creazione delle Rotte

const routes = [

    { 
        path: '/', 
        name:'home', 
        component:() => import('./pages/AppHome.vue') 
    },

    { 
        path: '/map', 
        name:'map', 
        component:() => import('./pages/AppMap.vue')  
    },

    { 
        path: '/gods', 
        name:'gods', 
        component:() => import('./pages/AppGods.vue')  
    },
     
    {   // will match everything and put it under `route.params.pathMatch`
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: AppNotFound 
    },
]


const router = createRouter({

    history: createWebHistory(),

    routes: routes,

})


// Guard beforeEach → Controlla i cambiamenti nelle rotte.
router.beforeEach((to, from) => {
    // Inizializza il Pinia store
  const mainStore = useMainStore();
    // Se la rotta ha nome 'NotFound', imposta notFound su true nello store
    if (to.name === 'NotFound') {
        mainStore.notFound = true;
    } else {
        mainStore.notFound = false;
    }    
})


export default router