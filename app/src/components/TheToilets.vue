<template>
    <div>
        <h2>TheToilets.vue is in use.</h2>
    </div>
</template>

<script setup>
async function getToilets() {
    let res = await fetch(`https://data.cityofnewyork.us/resource/hjae-yuav.json`);
    let toiletData = await res.json();
    let toiletResults = toiletData.results;
    console.log(res);
}
getToilets()
</script>

<style lang="scss" scoped>

</style>