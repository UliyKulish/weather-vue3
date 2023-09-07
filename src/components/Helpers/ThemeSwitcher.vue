<template>
  <div class="theme-switcher" @click="toggleDark()">
    <component :is="isDark ? SunIcon : MoonIcon"></component>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import SunIcon from '@/components/icons/SunIcon.vue'
import MoonIcon from '@/components/icons/MoonIcon.vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss">
.theme-switcher {
  cursor: pointer;
  margin-left: 5px;
  user-select: none;
  svg {
    display: block;
  }
}
</style>
