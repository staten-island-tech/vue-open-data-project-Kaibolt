<template>
    <div>
        <h2>TheToilets.vue is in use.</h2>
    </div>
</template>

<script setup>

async function getToilets() {
    let res = await fetch(`https://data.cityofnewyork.us/resource/hjae-yuav.json`);
    let toiletData = await res.json();
    return toiletData // after checking with console.log, the toilet data indeed exists
}
async function makeNames() {
    let toiletData = await getToilets()
    let i = 0
    let namedToilets = [];
    while (i < toiletData.length) {
        namedToilets.push(toiletData[i].name)
        i++
    } //After checking with console.log, the toilet names are indeed pushed
    return namedToilets
}
getToilets()
let test = async
</script>

<style lang="scss" scoped>

</style>