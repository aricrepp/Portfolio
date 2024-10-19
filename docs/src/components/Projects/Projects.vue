<template>
  <div class="project-container">
    <div class="project">
      <h5>Supply Chain Risk Mitigation Tool</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectContainer'
}
</script>

<style>
.project-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  position: relative;
  z-index: 1;
  left: 30vw;
  margin-top: 5em;
  background: rgba(20, 20, 20, 0.6);
  box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
  border-radius: 1em;
}
.project {
  width: 85%;
  height: 400px;
  margin: 2em;
  color: white;
}
.project h5 {
  font-size: 1.7rem;
}
</style>
