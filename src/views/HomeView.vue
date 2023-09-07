<script setup>
import MainBlock from '@/components/Weather/MainWeatherBlock.vue'
import AsideBlock from '@/components/Weather/AsideWeatherBlock.vue'
import { onMounted, inject } from 'vue'
import { getForecastByCity } from '@/composables/weather'
onMounted(async () => {
  await getForecastByCity()
})
</script>

<template>
  <main class="main-box">
    <MainBlock />
    <AsideBlock />
  </main>
</template>
