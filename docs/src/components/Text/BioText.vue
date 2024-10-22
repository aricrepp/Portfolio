<template>
  <div class="text-container" ref="textContainer">
    <div class="name-container">
      <h3>Hi,</h3>
      <h3 style="margin-left: 1em">I'm Aric Repp</h3>
    </div>
    <div class="bio-container">
      <p>Software Engineer - passionate about AI and web graphics.</p>
      <p>I'm fluent in React, Vue, NextJS, and Typescript.</p>
    </div>
    <div>
      <div class="cloud-container">
        <h5>Lifestyle</h5>
        <ul class="cloud-lifestyle">
          <li><span>Family</span></li>
          <li><span>Jiu Jitsu</span></li>
          <li><span>Entrepreneur</span></li>
          <li><span>Games</span></li>
        </ul>
      </div>
      <div class="cloud-container">
        <h5>Skills</h5>
        <ul class="cloud-skills">
          <li><span>NextJS</span></li>
          <li><span>Figma</span></li>
          <li><span>Gen AI</span></li>
          <li><span>VueJS</span></li>
          <li><span>React</span></li>
          <li><span>Node</span></li>
          <li><span>ThreeJS</span></li>
          <li><span>UIUX</span></li>
          <li><span>Python</span></li>
          <li><span>UI Engineer</span></li>
          <li><span>GCP</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from 'vue'
// const textContainer = ref(null)
export default defineComponent({
  name: 'WordCollage',
  props: {
    words: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((word) => typeof word.text === 'string' && typeof word.size === 'number')
      }
    },
    columns: {
      type: Number,
      default: 4
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  setup(props) {
    const gridTemplateAreas = computed(() => {
      const areas = []
      for (let i = 0; i < props.rows; i++) {
        areas.push('"' + Array(props.columns).fill('.').join(' ') + '"')
      }
      return areas.join(' ')
    })

    const getWordStyle = (word) => {
      const row = Math.floor(Math.random() * props.rows) + 1
      const col = Math.floor(Math.random() * props.columns) + 1
      const spanRow = Math.min(word.size, props.rows - row + 1)
      const spanCol = Math.min(word.size, props.columns - col + 1)

      return {
        gridArea: `${row} / ${col} / span ${spanRow} / span ${spanCol}`,
        fontSize: `${word.size * 0.5 + 0.5}rem`,
        fontWeight: word.size * 100 + 100
      }
    }

    return {
      gridTemplateAreas,
      getWordStyle
    }
  }
})
</script>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  right: 2em;
  height: 93vh;
  z-index: 1;
  overflow: hidden;
  margin-left: 50vw;
  padding-left: 5em;
  padding-top: 2em;
}
.name-container {
  display: flex;
  flex-direction: row;
  width: 40vw;
}

.name-container h3 {
  color: #464646;
  font-size: 4rem;
  z-index: 1;
  font-weight: 600;
  margin: 0;
  padding: 0;
  letter-spacing: 0.1em;
  line-height: 100px;
}
.bio-container p {
  font-size: 1.2rem;
}
.cloud-container h5 {
  margin-bottom: 0.4em;
  padding: 0;
}
ul.cloud-lifestyle {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0 10px;
  line-height: 2rem;
  width: 100%;
  height: 60px;
  padding: 0;
}

ul.cloud-skills {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0 10px;
  line-height: 2rem;
  width: 100%;
  height: 80px;
  padding: 0;
}

ul.cloud-skills span,
ul.cloud-lifestyle span {
  color: rgb(85, 85, 85);
  font-size: 0.8em;
  display: block;
  padding: 0.1rem 0.75rem;
  position: relative;
  text-decoration: none;
  background: #fff;
  border-radius: 2em;
}
</style>
