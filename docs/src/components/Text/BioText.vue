<template>
  <div class="text-container" ref="textContainer">
    <div class="name-container">
      <div><font-awesome-icon :icon="['fas', 'user-circle']" size="3x" color="#464646" /></div>
      <h3 style="margin-left: 0.5em">Aric Repp</h3>
      <h3
        class="job-title"
        style="margin-left: 0.5em; font-size: 1.2rem; line-height: 40px; margin-top: 10px"
      >
        - Software Engineer / Designer
      </h3>
    </div>
    <div class="bio-container">
      <p>Passionate about AI and web graphics.</p>
      <p>Frontend Stacks - React, Vue, NextJS, and Typescript.</p>
    </div>
    <div>
      <div class="cloud-container">
        <h5>Lifestyle {{ '\u{26A1}' }}</h5>
        <ul class="cloud-lifestyle">
          <li><span>Family</span></li>
          <li><span>Jiu Jitsu</span></li>
          <li><span>Entrepreneur</span></li>
          <li><span>Games</span></li>
        </ul>
      </div>
      <div class="cloud-container">
        <h5>Skills {{ '\u{1F680}' }}</h5>
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
          <li><span>Agile</span></li>
          <li><span>Jira</span></li>
        </ul>
      </div>
    </div>
    <div class="cloud-container">
      <h5>Current Projects {{ '\u{1F525}' }}</h5>
      <div class="project1">
        <h4>Atak - NPM Package</h4>
        <p style="font-weight: 300">
          This package that I've been developing is meant to connect with pre-existing testing
          frameworks, check test assertions using AI, and return a calculated score of your testing
          suite. Future iterations would allow for more finely tuned AI models that could return
          responses on how to improve your testing suite.
        </p>
      </div>
      <div class="project1">
        <h4>EQO - Social Music App</h4>
        <p style="font-weight: 300">
          A social media music app for the modern social lifestyles. EQO intends to take the power
          and presence that social media delivers together with a more localized experience that
          targets the individual at a town level.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'BioText',
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
  height: 70vh;
  z-index: 1;
  overflow: hidden;
  margin-left: 50vw;
  padding-left: 5em;
  padding-top: 2em;
  padding-right: 3em;
}
.name-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 40vw;
}
.name-container div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.8em;
}

.name-container h3 {
  color: #464646;
  font-size: 3rem;
  z-index: 1;
  font-weight: 600;
  margin: 0;
  padding: 0;
  letter-spacing: 0.1em;
  line-height: 100px;
}
.bio-container {
  margin-bottom: 1em;
}
.bio-container p {
  font-size: 1.2rem;
}
.cloud-container {
  margin-bottom: 0.7em;
}
.cloud-container h5 {
  margin-bottom: 1em;
  padding: 0;
}
.project1 {
  margin: 1em 0;
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
