<template>
    <div>
        <button label="++" @click="inc">{{ count }}</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(0)
const inc = () => {
    count.value += 0.1
}
</script>
