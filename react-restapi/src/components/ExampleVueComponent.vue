<template>
  <div class="vue-component">
    <h2>{{ message }}</h2>
    <p>This is an example Vue 3 component integrated with React!</p>
    <button @click="count++">Count: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello from Vue 3!')
const count = ref(0)
</script>

<style scoped>
.vue-component {
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
  margin: 20px 0;
}

button {
  padding: 10px 20px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #005aa3;
}
</style>
