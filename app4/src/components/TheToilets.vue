<template>
  <div>
    <!--    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">Boroughs</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>All</a></li>
        <li><a @click="filterToilets('brooklyn')">brooklyn</a></li>
        <li><a>bronx</a></li>
        <li><a>queens</a></li>
        <li><a>manhatten</a></li>
        <li><a>staten island</a></li>
      </ul>
    </div>-->
    <div class="flex flex-wrap">
      <div class="m-8 card bg-base-100 w-70 shadow-xl" v-for="toilet in toiletArray">
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
async function getToilets() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/hjae-yuav.json`)
  let toiletData = await res.json()
  return toiletData // after checking with console.log, the toilet data indeed exists
}
let toiletArray = await getToilets().then() // .then() wont work, neither will Promise.resolve(test)
/*
function filterToilets(borough) {
  while (((x = 0), x < toiletArray.length)) {
    if (toiletArray[x].borough == borough) {
      console.log(toiletArray[x])
    }
    x++
  }
}

*/
</script>

<style lang="scss" scoped></style>
