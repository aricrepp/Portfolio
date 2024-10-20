<script setup>
import Blob from '../components/Blob.vue'
import BioText from '../components/Text/BioText.vue'
import Projects from '../components/Projects/Projects.vue'
</script>

<template>
  <main class="main-container">
    <Blob />
    <BioText />
  </main>
</template>

<style>
.main-container {
  height: 100vh;
  width: 99vw;
  overflow-x: hidden;
}
</style>
