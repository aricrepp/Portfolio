<script setup>
import Blob from '../components/Blob.vue'
import BioText from '../components/Text/BioText.vue'
</script>

<template>
  <main class="main-container">
    <div class="background-design"></div>
    <div class="background-design-2"></div>
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
.background-design {
  position: fixed;
  top: 1.5em;
  bottom: 3em;
  left: 2.5em;
  right: 2.5em;
  background: #e6e6e6;
  border-radius: 1.5em;
  content: '';
  z-index: 1;
  box-shadow: 2px 2px 8px #a5a5a5;
}

.background-design-2 {
  position: fixed;
  top: 5em;
  bottom: 3.8em;
  left: 3.3em;
  right: 50vw;
  background: #ffffff;
  border-radius: 0.9em;
  content: '';
  z-index: 2;
  border-top-right-radius: 0;
  box-shadow: 4px 6px 8px -2px #a5a5a5 inset;
}
.background-design-2::before {
  content: '';
  position: absolute;
  background: #ffffff;
  top: -5%;
  left: 8em;
  bottom: 98%;
  right: 0;
  border-top-left-radius: 0.9em;
  border-top-right-radius: 0.9em;
  box-shadow: 0px 8px 4px -2px #a5a5a5 inset;
}
.background-design-2::after {
  content: '';
  position: absolute;
  background: none;
  backdrop-filter: blur(40);
  top: -1.8em;
  left: 6.2em;
  width: 2em;
  height: 2em;
  border-bottom: 0.2em solid #cccccc;
  border-right: 0.2em solid #cccccc;
  border-left: 0.2em solid transparent;
  border-bottom-right-radius: 0.5em;
  box-shadow: 4px 4px 8px -6px #a5a5a5;
}
</style>
