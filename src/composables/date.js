import { ref, watchEffect } from 'vue'
import { forecast } from '@/composables/weather'
const default_options = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
}
export const currentTime = ref(null)
const options = { ...default_options, timeZone: forecast?.value?.location?.tz_id }

export function convertTime(time) {
  return time.toLocaleTimeString('en-US', options)
}
const updateTime = () => {
  const now = new Date()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const month = monthNames[now.getMonth()]
  const day = now.getDate()
  const time = convertTime(now)

  currentTime.value = `${month} ${day}, ${time}`
}

watchEffect(() => {
  if (forecast?.value?.location?.tz_id) {
    updateTime()
    setInterval(() => {
      updateTime()
    }, 1000)
  }
})
