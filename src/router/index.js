import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Services
import ServicesView from '../views/services/IndexView.vue'
import ServiceDetailView from '../views/services/DetailView.vue'

import AboutUsView from '../views/AboutUsView.vue'
import ContactView from '../views/ContactView.vue'
import ThankYou from '../views/ThankYou.vue'
import NotFoundView from '../views/NotFoundView.vue'

// Legal
import AgreementPage from '../components/legal/AgreementPage'
import PrivacyPage from '../components/legal/PrivacyPage'
import SlaPage from '../components/legal/SlaPage'
import TermsPage from '../components/legal/TermsPage'
import UapPage from '../components/legal/UapPage'

import PricingBaas from '../views/PrincingBaas.vue'
import PricingDraas from '../views/PrincingDraas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // Services
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/services/:service',
    name: 'srv-detail',
    component: ServiceDetailView
  },
  //
  {
    path: '/us',
    name: 'us',
    component: AboutUsView
  },
  {
    path: '/thankyou',
    name: 'thankyou',
    component: ThankYou
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  // legal
  {
    path: '/legal/privacy',
    name: 'privacy',
    component: PrivacyPage
  },
  {
    path: '/legal/sla',
    name: 'sla',
    component: SlaPage
  },
  {
    path: '/legal/uap',
    name: 'uap',
    component: UapPage
  },
  {
    path: '/legal/terms',
    name: 'terms',
    component: TermsPage
  },
  {
    path: '/legal/agreement',
    name: 'agreement',
    component: AgreementPage
  },
  {
    path: '/pricingb',
    name: 'pricingBaas',
    component: PricingBaas
  },
  {
    path: '/pricingd',
    name: 'pricingDraas',
    component: PricingDraas
  },
  // 404
  { 
    path: '/:catchAll(.*)', 
    component: NotFoundView,
    name: '404'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})

export default router
