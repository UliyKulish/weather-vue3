<template>
  <div class="battery">
    <span class="battery__level">{{ batteryLevelPercent }}</span>
    <component :is="batteryIcon" class="battery__icon"></component>
  </div>
</template>

<script setup>
import ChargeIcon from '@/components/icons/ChargeIcon.vue'
import BatteryMediumIcon from '@/components/icons/BatteryMediumIcon.vue'
import BatteryLowIcon from '@/components/icons/BatteryLowIcon.vue'
import BatteryFullIcon from '@/components/icons/BatteryFullIcon.vue'
import { computed } from 'vue'
import { useBattery } from '@vueuse/core'
const { charging, level } = useBattery()
const batteryIcon = computed(() => {
  if (charging.value) {
    return ChargeIcon
  }
  if (level.value < 0.45) {
    return BatteryLowIcon
  }
  if (level.value < 0.75) {
    return BatteryMediumIcon
  }
  return BatteryFullIcon
})
let batteryLevelPercent = computed(() => {
  return `${Math.round(level.value * 100)}%`
})
</script>

<style scoped lang="scss">
.battery {
  display: flex;
  align-items: center;
  color: #fff;
  &__level {
    margin-right: 5px;

    font-size: 10px;
  }
}
</style>
