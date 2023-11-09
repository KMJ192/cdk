<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const increase = () => {
  count++;
};
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped></style>
