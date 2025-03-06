<template>
    <div>
        <h2>TheToilets.vue is in use.</h2>
        <div v-for="toilet in toiletArray">

            <h3 > {{ toilet.name }}</h3>
            <h4>{{ toilet.location }}</h4>
            <p>{{ toilet.borough }}</p>

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