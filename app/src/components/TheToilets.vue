<template>
  <div>
    <div class="flex flex-wrap">
      <div
        class="m-8 card bg-base-100 w-70 shadow-xl"
        v-for="toilet in toiletArray"
      >
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
  let res = await fetch(
    `https://data.cityofnewyork.us/resource/hjae-yuav.json`
  );
  let toiletData = await res.json();
  return toiletData; // after checking with console.log, the toilet data indeed exists
}
let toiletArray = await getToilets().then(); // .then() wont work, neither will Promise.resolve(test)
console.log(toiletArray);
function handicapAccess() {// This function is unused as of 3/11/2025, 12:33PM
  let i = toiletArray.length;
  let x = 0;
  let noAccess = []
  while (x !== i) {
    if (toiletArray[x].handicap_accessible == "Yes") {
      console.log("Handicap Accessible True: " + toiletArray[x].name);
    } else {
      console.log("Handicap Accessible False " + toiletArray[x].name);
      noAccess.push(toiletArray[x]);
    }
    x++;
  }
  return noAccess
}
handicapAccess();
console.log(handicapAccess())
</script>

<style lang="scss" scoped></style>
