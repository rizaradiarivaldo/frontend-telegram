import axios from 'axios'
import { URL } from '../../helpers/env'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
    // data: []
    // email: localStorage.getItem('email') || null,
  }
}

const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URL}/users/login`, payload)
        .then(response => {
          if (response.data.message === 'Login success!') {
            localStorage.setItem('token', response.data.data.token)
            resolve(response.data.message)
          } else {
            resolve(response.data.message)
          }
        })
        .catch(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('Login failed, email or password is wrong')
        })
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URL}/users/register/`, payload)
        .then(response => {
          resolve(response.data.message)
        })
        .catch(() => {
          alert('Register failed')
        })
    })
  },

  logout (context) {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshtoken')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
