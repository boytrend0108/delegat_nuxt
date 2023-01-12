import authApi from '@/api/auth'
import {setItem} from '@/composables/persistanceStorage'

export default {
  state:{ 
    isSubmitting: false,
    currentUser: null,
    currentUserToken: null,
    validationErrors: null,
    isLoggedIn: null,
  },
  getters: {
    isSubmitting(state){
      return state.isSubmitting
    },
    validationErrors(state){
      return state.validationErrors
    }
  },
  actions: {
    registration({commit},credentials) {
      return new Promise((resolve) => {
        commit('registerStart')
        authApi
          .register(credentials)
          .then((response) => {
            console.log('response', response)
            commit('registerSuccess', response.data.access_token)
            setItem('accessToken', response.data.access_token)
            resolve(response.data)
          })
          .catch((result) => {
            console.log('result errors', result)
            commit('registerFailed',result.response.data.detail[0].msg)
          })
      })
    },

    LOGIN({commit}, credentials) {
      console.log(credentials)
      return new Promise((resolve) => {
        commit("loginStart")
        authApi
          .login(credentials)
          .then((response) => {
            console.log('response', response)
            commit('loginSuccess', response.data)
            setItem('accessToken', response.data.access_token)
            resolve(response.data)
          })
          .catch((result) => {
            commit('loginFailed', result.response.data)
          })
      })
    },

  },
  mutations: {
    registerStart(state) {
      state.isSubmitting = true
      state.validationErrors = null
      console.log("register start")
    },
    registerSuccess(state, payload) {
      state.isSubmitting = false
      state.currentUserToken = payload
      state.isLoggedIn = true
      console.log("register success")
    },
    registerFailed(state, payload) {
      state.isSubmitting = false
      state.validationErrors = payload
      console.log("register failed")
    },
    loginStart(state) {
      state.isSubmitting = true
      state.validationErrors = null
    },
    loginSuccess(state, payload) {
      state.isSubmitting = false
      state.currentUser = payload
      state.isLoggedIn = true
    },
    loginFailed(state, payload) {
      state.isSubmitting = false
      state.validationErrors = payload
    },

  }
 
}