<template>
    <div>
        <h2>TheToilets.vue is in use.</h2>

        <div class="card bg-base-100 w-96 shadow-xl"> <!--Start of the card-->
  <div class="card-body">
    <h2 class="card-title">{{ toilet.name}}</h2>
    <h3>{{ toilet.location}}</h3>
    <h4>{{ toilet.borough }}</h4>
  </div>
</div> <!--End of the card-->

        <div v-for="toilet in toiletArray"> <!--Make this a card later-->

            <h3> {{ toilet.name }}</h3> <!--Name of the toilet area-->
            <h4>{{ toilet.location }}</h4> <!--The location of the toilet-->
            <p>{{ toilet.borough }}</p> <!--The borough the toilet is in-->

        </div>
        
    </div>
</template>

<script setup>
async function getToilets() {
    let res = await fetch(`https://data.cityofnewyork.us/resource/hjae-yuav.json`);
    let toiletData = await res.json();
    return toiletData // after checking with console.log, the toilet data indeed exists
}
let toiletArray = await getToilets().then() // .then() wont work, neither will Promise.resolve(test)
console.log(toiletArray)
function handicapAccess() {
    let i = toiletArray.length
    let x = 0
    while (x !== i) {
        if (toiletArray[x].handicap_accessible == "Yes") {
            console.log("Handicap Accessible True: " + toiletArray[x].name)
        }
        else {console.log("Handicap Accessible False " + toiletArray[x].name)}
        x++
    }
}
handicapAccess()
</script>

<style lang="scss" scoped>

</style>