<template>
  <div class="text-container" ref="textContainer">
    <div class="name-container">
      <h3>ARIC</h3>
      <h3>REPP</h3>
    </div>
    <ul class="cloud">
      <li><span data-weight="4">NextJS</span></li>
      <li><span data-weight="2">Games</span></li>
      <li><span data-weight="5">Figma</span></li>
      <li><span data-weight="7">AI Enthusiast</span></li>
      <li><span data-weight="6">Jiu Jitsu</span></li>
      <li><span data-weight="5">ThreeJS</span></li>
      <li><span data-weight="3">UIUX</span></li>
      <li><span data-weight="6">Family</span></li>
      <li><span data-weight="3">Python</span></li>
      <li><span data-weight="9">UI Engineer</span></li>
      <li><span data-weight="4">VueJS</span></li>
      <li><span data-weight="7">React</span></li>
      <li><span data-weight="3">GCP</span></li>
    </ul>
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
  position: relative;
  left: 35vw;
  top: 1%;
  width: 90vw;
  z-index: 1;
  overflow-x: hidden;
}

.name-container h3 {
  color: rgba(0, 0, 0, 0.6);
  font-size: 20rem;
  z-index: 1;
  font-weight: 600;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
  margin: 0;
  padding: 0;
  letter-spacing: 0.2em;
  line-height: 300px;
}

ul.cloud {
  list-style: none;
  padding-left: 3em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  line-height: 2.75rem;
  width: 50%;
  height: 220px;
}

ul.cloud span {
  --size: 4;
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
  font-size: calc(var(--size) * 0.25rem + 0.5rem);
  display: block;
  padding: 0.75rem 0.25rem;
  position: relative;
  text-decoration: none;
}

ul.cloud span[data-weight='1'] {
  --size: 1;
}
ul.cloud span[data-weight='2'] {
  --size: 2;
}
ul.cloud span[data-weight='3'] {
  --size: 3;
}
ul.cloud span[data-weight='4'] {
  --size: 4;
}
ul.cloud span[data-weight='5'] {
  --size: 6;
}
ul.cloud span[data-weight='6'] {
  --size: 8;
}
ul.cloud span[data-weight='7'] {
  --size: 10;
}
ul.cloud span[data-weight='8'] {
  --size: 13;
}
ul.cloud span[data-weight='9'] {
  --size: 16;
}

ul[data-show-value] span::after {
  content: ' (' attr(data-weight) ')';
  font-size: 1rem;
}

ul.cloud span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 100%;
  background: var(--color);
  transform: translate(-50%, 0);
  opacity: 0.15;
  transition: width 0.25s;
}
</style>
