import {createRouter, createWebHistory} from 'vue-router'

import TypeView from '../views/TypeView.vue'
import DesignView from '../views/DesignView.vue'
import ContentView from '../views/ContentView.vue'
import BehaviourView from '../views/BehaviourView.vue'
import SuccessView from '../views/SuccessView.vue'

const routes = [
    {
        path: "/type",
        name: "Type",
        component: TypeView
    },
    {
        path: "/design",
        name: "Design",
        component: DesignView
    },
    {
        path: "/content/:id",
        name: "Content",
        component: ContentView
    },
    {
        path: "/behaviour",
        name: "Behaviour",
        component: BehaviourView
    },
    {
        path: "/success",
        name: "Success",
        component: SuccessView
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router