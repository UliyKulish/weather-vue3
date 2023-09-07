<template>
  <h1 class="hello">{{ text }}</h1>
</template>

<script setup>
import { computed } from 'vue'

const text = computed(() => {
  const hours = new Date().getHours()
  if (hours >= 4 && hours < 12) {
    return 'Good morning'
  } else if (hours >= 12 && hours < 18) {
    return 'Good day'
  } else if (hours >= 18 && hours < 4) {
    return 'Good night'
  } else {
    return 'Good evening'
  }
})
</script>

<style scoped>
.hello {
  font-size: 3rem;
  color: #fff;
}
</style>
