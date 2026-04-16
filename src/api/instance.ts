import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://musicfun.it-incubator.app/api/1.0',
  headers: {
    'api-key': '6c2aa814-1511-41b3-974e-263ef2c395d3',
  },
})
