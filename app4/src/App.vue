<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/"
      ><h2><p class="btn btn-ghost text-xl">All Toilets</p></h2></RouterLink
    >
    <RouterLink to="/about">
      <h2><p class="btn btn-ghost text-xl">Accessibility</p></h2></RouterLink
    >
    <RouterLink to="/year"
      ><h2><p class="btn btn-ghost text-xl">Year-Round</p></h2></RouterLink
    >
  </nav>

  <body>
    <RouterView class="w-full" />
  </body>
</template>

<style scoped></style>
