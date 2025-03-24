<script setup>
import PieChart from '@/components/PieChart.vue'
</script>

<template>
  <Suspense><PieChart :chartData="pieData" :chartOptions="pieOptions" /></Suspense>
</template>
