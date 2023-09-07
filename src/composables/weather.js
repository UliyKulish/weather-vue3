import { ref } from 'vue'
import api from '@/api'
import { DEFAULT_CITY } from '@/constants'
export const forecast = ref({})
const getCityFromStorage = () => {
  return localStorage.getItem('city')
}
const day = new Date().toLocaleDateString()
async function fetchForecastByCity(city) {
  return await api.weather.getForecast(city).then((res) => {
    localStorage.setItem('city', city.toLowerCase())
    localStorage.setItem(city.toLowerCase(), JSON.stringify({ ...res, date: day }))
    return res
  })
}
function getWeatherDataFromStorage(city) {
  city = city.toLowerCase()
  let data = JSON.parse(localStorage.getItem(city))

  if (data?.date === day) {
    return data
  }
  return false
}
export const getForecastByCity = async (city) => {
  if (!city) {
    city = getCityFromStorage() || DEFAULT_CITY
  }
  forecast.value = (await getWeatherDataFromStorage(city)) || (await fetchForecastByCity(city))
}
