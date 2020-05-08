import * as axios from 'axios'

const baseUrl = 'https://s3.amazonaws.com/'
let instance = axios.create()
instance.defaults.baseURL = baseUrl
instance.defaults.timeout = 20000

export { instance as default }
