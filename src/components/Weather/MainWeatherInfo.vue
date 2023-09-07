<template>
  <div v-if="forecast.current" class="current_wether">
    <div class="current_wether__body">
      <div class="current_wether__temp">
        <div class="current_wether__temp_current">
          {{ temp_c }}
        </div>
        <div class="current_wether__temp_feels">Feels like: {{ feels_like_c }}</div>
      </div>
      <div class="current_wether__condition">
        <img :src="forecast.current.condition.icon" :alt="forecast.current.condition.text" />
        <p class="current_wether__condition_text">{{ forecast.current.condition.text }}</p>
      </div>
    </div>
    <div class="current_wether__footer">
      <div class="current_wether__footer_time">{{ currentTime }}</div>
      <div class="current_wether__footer_temp">
        <span>max: {{ max_temp }}</span>
        <span>min: {{ min_temp }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { forecast } from '@/composables/weather'
import { computed } from 'vue'
import { currentTime } from '@/composables/date'
const temp_c = computed(() => {
  return `${Math.floor(forecast.value?.current?.temp_c)}°`
})
const feels_like_c = computed(() => {
  return `${Math.floor(forecast.value?.current?.feelslike_c)}°`
})
const max_temp = computed(() => {
  return `${Math.floor(forecast.value.forecast?.forecastday[0].day.maxtemp_c)}°`
})
const min_temp = computed(() => {
  return `${Math.floor(forecast.value.forecast?.forecastday[0].day.mintemp_c)}°`
})
</script>

<style scoped lang="scss">
.current_wether {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-top: 40px;
  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 950px) {
      flex-direction: column-reverse;
      align-items: start;
    }
  }
  &__temp {
    display: flex;
    align-items: baseline;

    &_current {
      font-size: 7rem;
    }
    &_feels {
      margin-left: -30px;
      font-size: 1rem;
    }
  }
  &__condition {
    text-align: center;
    &_text {
    }
  }
  &__footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_temp {
      span {
        display: block;
        &:first-child {
          margin-bottom: 5px;
          padding-bottom: 5px;
          border-bottom: 1px solid;
        }
      }
    }
  }
}
</style>
