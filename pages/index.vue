<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <div>pending: {{ pending }}</div>
    <div>data: {{ data }}</div>
    <div>error: {{ error }}</div>
  </div>
</template>

<script setup lang="ts">
const headers = useRequestHeaders(['cookie'])
const { pending, data, error } = await useFetch('/api/user', { headers })
console.log(pending.value, data.value)
</script>
