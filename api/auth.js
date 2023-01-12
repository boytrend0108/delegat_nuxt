import axios from '@/api/axios'

const register = (credentials) => {
  return axios.post('/sign-up', credentials)
}

const login = (credentials) => {
  return axios.post('/sign-in', credentials)
}

export default {
  register,
  login,
}