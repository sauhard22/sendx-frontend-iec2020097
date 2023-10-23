import {createRouter, createWebHistory} from 'vue-router'

import TypeView from '../views/TypeView.vue'
import DesignView from '../views/DesignView.vue'
import ContentView from '../views/ContentView.vue'
import TargetingView from '../views/TargetingView.vue'
import BehaviourView from '../views/BehaviourView.vue'

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
        path: "/targeting",
        name: "Targeting",
        component: TargetingView
    },
    {
        path: "/behaviour",
        name: "Behaviour",
        component: BehaviourView
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router