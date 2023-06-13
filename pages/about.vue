<template>
    <h1>About</h1>
    <LazySimpleComponent />
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>
