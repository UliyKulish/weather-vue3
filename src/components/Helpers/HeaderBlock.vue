<template>
  <div class="header">
    <div class="header__title">WeatherApp</div>
    <div class="header__info">
      <BatteryBlock v-if="isSupported" />
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup>
import ThemeSwitcher from '@/components/Helpers/ThemeSwitcher.vue'
import BatteryBlock from '@/components/Helpers/BatteryBlock.vue'
import { useBattery } from '@vueuse/core'
const { isSupported } = useBattery()
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &__title {
    color: #fff;
  }
  &__info {
    display: flex;
    align-items: center;
  }
}
</style>
