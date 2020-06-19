/*
 * @Descripttion: api
 * @version: 
 * @Date: 2020-04-28 15:18:12
 */
import axios from 'axios'

export default {
  test(options) {
    return axios.post('/api/weather', options)
  }
}



