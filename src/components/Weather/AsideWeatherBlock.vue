<template>
  <div class="info-block" v-if="forecast.forecast">
    <h2 class="info-block__title">Weather Info</h2>
    <div class="info-block__data">
      <div class="info-block__data_item">
        <div class="info-block__data_item__icon">
          <WindIcon />
        </div>
        <div class="info-block__data_item__text">
          <span>Wind speed:</span> {{ forecast.current.wind_kph }} k/h
        </div>
      </div>
      <div class="info-block__data_item">
        <div class="info-block__data_item__icon">
          <GraphIcon />
        </div>
        <div class="info-block__data_item__text">
          <span>Pressure:</span> {{ forecast.current.pressure_mb }} hpa
        </div>
      </div>
      <div class="info-block__data_item">
        <div class="info-block__data_item__icon">
          <SunIcon />
        </div>
        <div class="info-block__data_item__text">
          <span>UV index:</span> {{ forecast.forecast.forecastday[0].day.uv }}
        </div>
      </div>
      <div class="info-block__data_item">
        <div class="info-block__data_item__icon">
          <UmbrellaIcon />
        </div>
        <div class="info-block__data_item__text">
          <span>Rain chance:</span> {{ forecast.forecast.forecastday[0].day.daily_chance_of_rain }}
        </div>
      </div>
    </div>
    <h2 class="info-block__title">Sunrise/Sunset time</h2>
    <div class="info-block__data">
      <div class="info-block__data_item">
        <div class="info-block__data_item__icon">
          <SunIcon />
        </div>
        <div class="info-block__data_item__text">
          <span>Sunrise</span>: {{ forecast.forecast.forecastday[0].astro.sunrise }}
        </div>
      </div>
      <div class="info-block__data_item">
        <div class="info-block__data_item__icon">
          <NightIcon />
        </div>
        <div class="info-block__data_item__text">
          <span>Sunset</span>: {{ forecast.forecast.forecastday[0].astro.sunset }}
        </div>
      </div>
    </div>
    <h2 class="info-block__title">Temperature during the day</h2>
    <TempByDay :hours="forecast.forecast.forecastday[0].hour" />
  </div>
</template>

<script setup>
import { forecast } from '@/composables/weather'
import TempByDay from '@/components/Weather/TempByDay.vue'
import WindIcon from '@/components/icons/WindIcon.vue'
import SunIcon from '@/components/icons/SunIcon.vue'
import NightIcon from '@/components/icons/NightIcon.vue'
import UmbrellaIcon from '@/components/icons/UmbrellaIcon.vue'
import GraphIcon from '@/components/icons/GraphIcon.vue'
</script>

<style lang="scss" scoped>
.info-block {
  max-width: 600px;
  min-width: 0;
  padding: var(--gap);

  &__title {
    margin-bottom: calc(var(--gap) / 2);
  }
  &__data {
    margin-bottom: var(--gap);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap);
    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
    }
    &_item {
      border-radius: var(--radius);
      background: var(--box-item-bg);
      padding: calc(var(--gap) / 2);
      display: flex;
      align-items: center;
      &__icon {
        padding: 5px;
        border-radius: 100%;
        margin-right: 5px;
        background: var(--box-bg);
        svg {
          display: block;
          width: 18px;
          height: 18px;
          stroke: var(--icons-color);
        }
      }
      &__text {
        span {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
