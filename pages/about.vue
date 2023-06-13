<template>
    <h1>About</h1>
    <SimpleComponent />
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>
