import Vue from 'vue'
import Router from 'vue-router'

import Wallet from './views/Wallet.vue'
import Notifications from './views/Notifications.vue'
import Account from './views/Account.vue'
import Reward from './views/Reward.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wallet',
      component: Wallet,
      visible: true
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications,
      visible: true
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      visible: true
    },
    {
      path: '/reward/:id',
      name: 'reward',
      component: Reward,
      visible: false,
      props: true,
    }
  ]
})
