import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Cart = () => import('views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: './home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/Cart',
  component: Cart
}, {
  path: '/Category',
  component: Category
}, {
  path: '/Profile',
  component: Profile
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
