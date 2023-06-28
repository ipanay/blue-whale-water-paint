import Home from '../page/home'
import About from '../page/about'
import Connect from '../page/connect'
import Case from '../page/case'
import Product from '../page/product'
export default [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/case',
        name: 'case',
        component: Case
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/connect',
        name: 'connect',
        component: Connect
    },
    {
        path: '*',
        redirect: '/home'
    },
]