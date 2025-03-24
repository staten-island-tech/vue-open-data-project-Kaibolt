<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Accessible', 'Unaccessible'],
        datasets: [{ data: [access, noAccess] }],
      },
      chartOptions: {
        responsive: true,
      },
    }
  },
}

async function getToilets() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/hjae-yuav.json`)
  let toiletData = await res.json()
  return toiletData
}
let toiletArray = await getToilets().then()
console.log(toiletArray)
function handicapAccess() {
  let i = toiletArray.length
  let x = 0
  let noAccess = []
  while (x !== i) {
    if (toiletArray[x].handicap_accessible == 'Yes') {
      console.log('Handicap Accessible True: ' + toiletArray[x].name)
    } else {
      console.log('Handicap Accessible False ' + toiletArray[x].name)
      noAccess.push(toiletArray[x])
    }
    x++
  }
  return noAccess
}
let noAccess = handicapAccess().length
let access = toiletArray.length - noAccess
</script>
