<script setup>
import TheToilets from "./components/TheToilets.vue";
</script>

<template>
  <!--<div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />-->
  <div class="navbar bg-base-100 shadow-sm justify-around">
  <h2><a class="btn btn-ghost text-xl">All Toilets</a></h2> 
  <h2><a class="btn btn-ghost text-xl">Accessibility</a></h2> 
  <h2><a class="btn btn-ghost text-xl">Year-Round</a></h2> 
</div>
  <Suspense> <TheToilets /></Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
