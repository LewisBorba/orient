import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://south-health.herokuapp.com:443'

Vue.prototype.$http = axios
