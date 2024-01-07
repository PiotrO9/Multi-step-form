import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/step/1'
    },
    {
      path: '/step/1',
      name: 'stepOne',
      component: () => import('../components/steps/one/StepOne.vue')
    },
    {
      path: '/step/2',
      name: 'stepTwo',
      component: () => import('../components/steps/two/StepTwo.vue')
    },
    {
      path: '/step/3',
      name: 'stepThree',
      component: () => import('../components/steps/three/StepThree.vue')
    },
    {
      path: '/step/4',
      name: 'stepFour',
      component: () => import('../components/steps/four/StepFour.vue')
    },
    {
      path: '/step/5',
      name: 'stepFive',
      component: () => import('../components/steps/five/StepFive.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/step/1'
    }
  ]
})

export default router
