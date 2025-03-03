<template>
    <div>

    </div>
</template>

<script setup>
function getToilets() {
    let res = await fetch('https://data.cityofnewyork.us/resource/hjae-yuav.json')
    let data = await res.json
    console.log(data.results)
}
</script>

<style lang="scss" scoped>

</style>