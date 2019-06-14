import Home from '../views/Home.vue'
import Notebook from '../views/Notebook.vue'
import Login from '../components/Login.vue'
import Monitor from '../components/Monitor.vue'
import Spin from '../components/Spin.vue'

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
    {
        path: '/notebook',
        name: 'notebook',
        component: () => import(/* webpackChunkName: "about" */ '../views/Notebook.vue'),
        redirect: '/notebook/spin',
        children: [
            {
              path: 'spin',
              name: 'spin',
              component: Spin
            },
            {
                path: 'monitor',
                name: 'monitor',
                component: Monitor
            },
            {
                path: 'list',
                name: 'list',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../components/List.vue')
            },
            {
                path: 'editor',
                name: 'editor',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../components/Editor.vue')
            },
        ]
    }

]
