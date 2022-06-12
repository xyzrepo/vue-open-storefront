import { useCustomer } from '@/stores'

export default defineNuxtRouteMiddleware((to, from) => {

  console.log('This is the middleware')

  // redirect to login if not logged in
  if (to.name === 'account' && !useCustomer().isSignedIn) {
    return navigateTo({ name: 'account-login' })
  }
  // redirect to account if logged in
  if (to.name === 'account-login' && useCustomer().isSignedIn) {
    return navigateTo({ name: 'account' })
  }
})
