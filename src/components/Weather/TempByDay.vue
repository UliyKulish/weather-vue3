<template>
  <div class="temps">
    <div class="temps_hours" v-for="hourInfo in hours" :key="hourInfo.time_epoch">
      <span class="temps_hours__time">{{ timeToSting(hourInfo.time) }}</span>
      <div class="temps_hours__icon">
        <img :src="hourInfo.condition.icon" :alt="hourInfo.condition.text" />
      </div>
      <span class="temps_hours__text">{{ hourInfo.condition.text }}</span>
      <span class="temps_hours_temp">{{ hourInfo.temp_c }}°</span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  hours: Object
})
import { convertTime } from '@/composables/date'
const timeToSting = (timestamp) => {
  const time = convertTime(new Date(timestamp))
  return time === '24:00' ? '00:00' : time
}
</script>
<style scoped lang="scss">
.temps {
  display: flex;
  align-items: center;
  overflow: scroll;
  &_hours {
    border-radius: var(--radius);
    background: var(--box-item-bg);
    padding: calc(var(--gap) / 2);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 150px;
    &__time {
      margin-bottom: 10px;
      font-weight: bold;
    }
    &:not(:last-child) {
      margin-right: var(--gap);
    }
  }
}
</style>
