async function getToilets() {
    let res = await fetch(`https://data.cityofnewyork.us/resource/hjae-yuav.json`)
    let toiletData = await res.json()
    return toiletData
  }
export let toiletArray = await getToilets().then()
