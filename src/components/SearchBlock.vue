<template>
  <div class="search-block">
    <div class="search-block__city">{{ LocationInfo }}</div>
    <div class="search-block__icon" @click="toggleSearch()"><SearchIcon /></div>
    <div class="search-block__bar" v-show="showSearachBar">
      <input
        placeholder="Choose your city"
        type="text"
        ref="searchInput"
        v-model="city"
        @keydown.enter="getWeatherAndClosePopup()"
      />
    </div>
  </div>
</template>

<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue'
import { ref, computed, watch, nextTick } from 'vue'
import { getForecastByCity, forecast } from '@/composables/weather'
import { onClickOutside } from '@vueuse/core'
let city = ref('')

const getWeatherAndClosePopup = () => {
  getForecastByCity(city.value).then(() => {
    showSearachBar.value = false

    city.value = ''
  })
}
let searchInput = ref(null)
let showSearachBar = ref(false)
const LocationInfo = computed(() => {
  if (forecast.value.location) {
    const location = forecast.value.location
    return `${location.name}, ${location.country}`
  }
  return 'Choose your city'
})
const toggleSearch = (value) => {
  if (value !== undefined) {
    showSearachBar.value = value
    return
  }
  showSearachBar.value = !showSearachBar.value
}
onClickOutside(searchInput, () => {
  toggleSearch(false)
})
watch(showSearachBar, (val) => {
  if (val) {
    nextTick(() => {
      searchInput.value.focus()
    })
  }
})
</script>

<style scoped lang="scss">
.search-block {
  display: flex;
  color: #fff;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  position: relative;
  &__city {
    padding: 5px;
    border-radius: 5px;
    background: var(--color-background);
    color: var(--color-text);
  }
  &__icon {
    padding: 5px;
    border-radius: 5px;
    background: var(--color-background);
    cursor: pointer;
    svg {
      display: block;
      stroke: var(--color-text);
    }
  }
  &__bar {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    input {
      width: 100%;
      padding: 5px;
      height: 100%;
    }
  }
}
</style>
