import { API_KEY } from '@/constants'
import axios from '@/api/axios'
export default {
  async getForecast(city) {
    try {
      const res = await axios.get(`forecast.json?key=${API_KEY}&days=3&q=${city}`)
      return res?.data
    } catch (e) {
      throw new Error(e)
    }
  }
}
