<template>
    <div>
        <h1>{{ route.params.id }}</h1>
    </div>
</template>
  
<script setup lang="ts">
const route = useRoute()
console.log(route.params.id)
</script>
  