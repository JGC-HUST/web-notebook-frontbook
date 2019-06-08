import Home from '../views/Home.vue'
import Login from '../components/Login.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/login',
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login
            },
            {
                path: 'signup',
                name: 'signup',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../components/SignUp.vue')
            },
        ]
    },

]
