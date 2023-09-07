<template>
  <div class="main-weather">
    <HeaderBlock />
    <GreetingsBlock />
    <SearchBlock />
    <CurrentWeatherBlock />
  </div>
</template>

<script setup>
import HeaderBlock from '@/components/Helpers/HeaderBlock.vue'
import GreetingsBlock from '@/components/Helpers/GreetingsBlock.vue'
import SearchBlock from '@/components/SearchBlock.vue'
import CurrentWeatherBlock from '@/components/Weather/MainWeatherInfo.vue'
</script>

<style scoped lang="scss">
.main-weather {
  background: url(/src/assets/images/background.jpg);
  background-size: cover;
  width: 450px;
  min-width: 300px;
  min-height: 640px;
  border-radius: var(--radius);
  padding: var(--gap);
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 0 800px rgb(0 0 0 / 30%);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 675px) {
    width: 100%;
  }
}
</style>
