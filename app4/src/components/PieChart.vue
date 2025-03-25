<script setup>
import { reactive } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

import { toiletArray } from '@/assets/general.js'
function findYearly() {
  let i = toiletArray.length
  let x = 0
  let yearly = []
  while (x !== i) {
    if (toiletArray[x].open_year_round == 'Yes') {
      yearly.push(toiletArray[x])
    }
    x++
  }
  return yearly
}
function findSpecific(abc) {
  let i = Yearly.length
  let x = 0
  let skibidi = []
  while (x !== i) {
    if (Yearly[x].borough == abc) {
      skibidi.push(Yearly[x])
    }
    x++
  }
  return skibidi
}
let Yearly = findYearly()
let bronx = findSpecific('Bronx').length
let brooklyn = findSpecific('Brooklyn').length
let queens = findSpecific('Queens').length
let manhatten = findSpecific('Manhattan').length
let staten = findSpecific('Staten Island').length
ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartData = reactive({
  labels: ['Brooklyn', 'Manhatten', 'Queens', 'Staten Island', 'Bronx'],
  datasets: [
    {
      data: [brooklyn, manhatten, queens, staten, bronx],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
    },
  ],
})

const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
})
</script>

<template>
  <div class="w-96 mx-auto">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>
