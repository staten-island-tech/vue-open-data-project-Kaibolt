<template>
  <div class="flex justify-center">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">Boroughs</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a @click="testClick($event)">All</a></li>
        <li><a @click="testClick($event)">Brooklyn</a></li>
        <li><a @click="testClick($event)">Bronx</a></li>
        <li><a @click="testClick($event)">Queens</a></li>
        <li><a @click="testClick($event)">Manhattan</a></li>
        <li><a @click="testClick($event)">Staten Island</a></li>
      </ul>
    </div>
    <div class="flex flex-wrap">
      <div class="m-8 card bg-base-100 w-70 shadow-xl" v-for="toilet in finalArray">
        <!--Start of the card-->
        <div class="card-body">
          <h2 class="card-title">{{ toilet.name }}</h2>
          <h3>{{ toilet.location }}</h3>
          <h4>{{ toilet.borough }}</h4>
        </div>
      </div>
      <!--End of the card-->
    </div>
  </div>
</template>

<script setup>
import { toiletArray } from '@/assets/general.js'
import { ref } from 'vue'

let selectedBorough = ref('')
let finalArray = ref(toiletArray)

function testClick(event) {
  selectedBorough = event.target.innerHTML
  arrayMaker()
  console.log(finalArray.value)
}
function arrayMaker() {
  if (selectedBorough === 'All' || selectedBorough === '') {
    finalArray.value = toiletArray
    console.log(finalArray.value)
  } else {
    console.log(selectedBorough)
    finalArray.value = toiletArray.filter((toilet) => toilet.borough === selectedBorough)
    console.log(finalArray.value)
  }
}
</script>

<style lang="scss" scoped></style>
