import { createRouter, createWebHistory, createMemoryHistory } from "vue-router";
import Home from './Pages/Home.vue'
import Features from './Pages/Features.vue'
import NotFound from './Pages/404.vue'
import WebsiteCreation from './Pages/WebsiteCreation.vue'
import Pricing from './Pages/Pricing.vue'
import WebBuilder from './Pages/WebBuilder.vue'
import ForgotPassword from "./Pages/Auth/ForgotPassword.vue";
import NewPassword from "./Pages/Auth/NewPassword.vue";
import Brief from "./Pages/Auth/SignUpBrief.vue";
import Setup from "./Pages/Auth/SignUpSetup.vue";
import Signup from "./Pages/Auth/Signup.vue";
import Account from "./Pages/Auth/SignUpAccount.vue";
import Verify from "./Pages/Auth/SignUpVerify.vue";
import Activation from "./Pages/Auth/SignUpActivation.vue";
import Login from "./Pages/Auth/Login.vue";
import AuthLayout from "./components/AuthLayout.vue";


const routes = [
    {path:"/auth", name:'Auth', component: AuthLayout, children: [
        {path:"/register", name:'Signup',component: Signup, children:[
            {path:"/register/:id?", name:'register', component: Account, meta:{
                title: `Account | Webtusk   `
            }},
            {path:"/activation", meta:{requiresAuth: true }, component: Activation, name: 'Activation', meta:{
        title: `Activation | Webtusk   `
    }},
            {path:"/setup", name: 'Setup', component: Setup, meta:{
        title: `Setup | Webtusk   `
    }},
            {path:"/brief", name: 'Brief', component: Brief, meta:{
        title: `Brief | Webtusk   `
    }},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        ]},
        
    ]},
    {path:"/login", name:'Login', component: Login, meta:{
        title: `Login | Webtusk   `
    }},
    {path:"/verify",  name:'Verify',  component: Verify, meta:{
        title: `Verify | Webtusk   `
    }},
    {path:"/forgot-password/:id?", name: 'ForgotPassword', component: ForgotPassword, meta:{
        title: `Forgot Password | Webtusk   `
    }},
    {path:"/new-password" , meta:{requiresAuth: true }, name: 'NewPassword', component: NewPassword, meta:{
        title: `Forgot Password | Webtusk   `
    }},
    {path:'/', name: 'Home', component: Home, meta:{
        title: 'Website solution | Webtusk'
    }},
    {path:'/web-builder', component: WebBuilder, name:"WebBuilder", meta:{
        title: `WebBuilder | Webtusk   `
    }},
    {path:'/pricing', component: Pricing, name:"Pricing", meta:{
        title: `Pricing | Webtusk   `
    }},
    {path:'/features', component: Features, name:"Features", meta:{
        title: `Features | Webtusk   `
    }},
    {path:'/website-creation', component: WebsiteCreation, name:"WebsiteCreation", meta:{
        title: `WebsiteCreation | Webtusk   `
    }},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
        path: '/:catchAll(.*)',
        component: '../index.html', // Specify the path to your index.html file
      },
]
const router = createRouter({
    history:createWebHistory(),
  routes,
    
})


// router.beforeEach((to, from, next) => {
//     if (to.name == 'Verify' || to.name == 'Brief' || to.name == 'Activation' || to.name == 'Setup') {
//         if(localStorage.getItem("status") == 'Unauthenticated.') {
//             router.push('/register')
//         } else {
//             if(to.name == 'Brief' || to.name == 'Setup' || to.name == 'Activation') {
//                 if(!localStorage.getItem("isVerified")){
//                     router.push('/verify')
//                 } else{
//                     if(to.name == 'Brief' || to.name == 'Setup') {
//                         if(localStorage.getItem("status") == 'pending'){
//                             router.push('/activation')
//                         } else{

//                             next();
//                         }
//                     } else{
//                         next();
//                     }
//                  next();
//                 }
//             } else{
//                 next();
//             }
//         }
//     } else {
//       next();
//     }
//   });
//   router.beforeEach((to, from, next) => {
//     if (to.name == 'Verify') {
//         if(localStorage.getItem("isVerified")){
//             router.push('/activation')
//         } else {
//             next()
//         }
//   } else {
//     next()
//   }
// });
//   router.beforeEach((to, from, next) => {
//     if (to.name == 'Activation') {
//         if(localStorage.getItem("status") == 'progress'){
//             router.push('/setup')
//         } else {
//             next()
//         }
//   } else {
//     next()
//   }
// });

// router.beforeEach((to, from, next) => {
//     if (to.name == 'register') {
//         if(localStorage.getItem("webtusk_token")){
//             router.push('/verify')
//         } else {
//             next()
//         }
//   } else {
//     next()
//   }
// });

// router.beforeEach((to, from, next) => {
//     if (to.name == 'NewPassword') {
//         if(!localStorage.getItem('email')){
//             router.push('/login')
//         } else {
//             next()
//         }
//   } else {
//     next()
//   }
// });
export default router;
 