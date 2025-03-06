<template>
    <div>
        <h2>TheToilets.vue is in use.</h2>
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
</script>

<style lang="scss" scoped>

</style>