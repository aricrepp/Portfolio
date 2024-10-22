<template>
  <div ref="container" class="threejs-container">
    <div class="blob-controls-container">
      <button @click="startMeltAnimation" class="melt-button">
        {{ buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import RAPIER from 'https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.11.2'
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js'
import { ref, onMounted, onBeforeUnmount, toRaw, shallowRef, computed } from 'vue'
import BlobCursor from '../assets/black-n-shiney.jpg'

export default {
  name: 'BlobContainer',
  setup() {
    const container = ref(null)
    const scene = shallowRef(null)
    const camera = shallowRef(null)
    const renderer = shallowRef(null)
    const world = shallowRef(null)
    const clock = new THREE.Clock()
    const mousePos = shallowRef(new THREE.Vector2())
    const mouseMesh = shallowRef(null)
    const metaballs = shallowRef(null)
    const bodies = shallowRef([])
    const mouseRigid = shallowRef(null)
    const sceneMiddle = new THREE.Vector3(0, 0, 0)
    const metaOffset = new THREE.Vector3(0.5, 0.5, 0.5)
    const isMelting = ref(false)
    const raycaster = new THREE.Raycaster()
    const isInitialized = ref(false)

    const initScene = async () => {
      const w = window.innerWidth
      const h = window.innerHeight

      scene.value = new THREE.Scene()
      camera.value = new THREE.PerspectiveCamera(75, w / h, 0.1, 2000)
      camera.value.position.z = 6
      camera.value.rotation.y = -THREE.MathUtils.degToRad(40)
      renderer.value = new THREE.WebGLRenderer()
      renderer.value.setSize(w, h)
      renderer.value.setClearColor(0x000000, 0)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
      scene.value.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
      directionalLight.position.set(5, 5, 5)
      scene.value.add(directionalLight)

      const pointLight1 = new THREE.PointLight(0xffffff, 1.2)
      pointLight1.position.set(-5, 3, -5)
      scene.value.add(pointLight1)

      const pmremGenerator = new THREE.PMREMGenerator(renderer.value)
      scene.value.environment = pmremGenerator.fromScene(new THREE.Scene()).texture

      if (container.value) {
        container.value.appendChild(renderer.value.domElement)
      }

      await RAPIER.init()
      const gravity = { x: 0, y: 0, z: 0 }
      world.value = new RAPIER.World(gravity)

      const numBodies = 20
      const debugBodies = false
      for (let i = 0; i < numBodies; i++) {
        const body = getBody({ debug: debugBodies, RAPIER, world: toRaw(world.value), isMelting })
        bodies.value.push(body)
        if (debugBodies) {
          scene.value.add(body.mesh)
        }
      }

      await createMouseRigidBody()
      createMetaballs()
      animate()
      isInitialized.value = true
    }

    const startMeltAnimation = () => {
      if (bodies.value.length === 0) {
        resetMetaballs()
      } else if (isMelting.value) {
        resetMetaballs()
        isMelting.value = false
      } else {
        const currentTime = clock.getElapsedTime()
        bodies.value.forEach((bodyWrapper) => {
          bodyWrapper.creationTime = currentTime
        })
        isMelting.value = true
      }
    }

    const meltMetaballs = () => {
      const currentTime = clock.getElapsedTime()
      bodies.value = bodies.value.filter((bodyWrapper) => {
        const { rigid: metaballBody, meltSpeed, meltDelay, creationTime } = bodyWrapper
        if (currentTime - creationTime >= meltDelay) {
          const velocity = metaballBody.linvel()
          metaballBody.setLinvel({ x: velocity.x, y: velocity.y - meltSpeed, z: velocity.z }, true)
        }

        const position = metaballBody.translation()

        if (position.y < -5) {
          world.value.removeRigidBody(metaballBody)

          if (bodyWrapper.mesh) {
            scene.value.remove(bodyWrapper.mesh)
          }
          return false
        }
        return true
      })

      if (bodies.value.length === 0) {
        isMelting.value = false
      }
    }

    const resetMetaballs = () => {
      bodies.value.forEach((bodyWrapper) => {
        const metaballBody = bodyWrapper.rigid
        world.value.removeRigidBody(metaballBody)
        if (bodyWrapper.mesh) {
          scene.value.remove(bodyWrapper.mesh)
        }
      })
      bodies.value = []

      const numBodies = 20
      const debugBodies = false
      for (let i = 0; i < numBodies; i++) {
        const body = getBody({ debug: debugBodies, RAPIER, world: toRaw(world.value), isMelting })
        bodies.value.push(body)
      }
    }

    const createMouseRigidBody = async () => {
      const textureLoader = new THREE.TextureLoader()
      const matcap = textureLoader.load(BlobCursor)

      const bodyDesc = RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0, 0, 0)
      mouseRigid.value = world.value.createRigidBody(bodyDesc)
      const dynamicCollider = RAPIER.ColliderDesc.ball(0.5)
      world.value.createCollider(dynamicCollider, mouseRigid.value)

      const geometry = new THREE.IcosahedronGeometry(0.45, 4)
      const material = new THREE.MeshPhysicalMaterial({
        matcap,
        vertexColors: true,
        flatShading: false,
        smoothShading: true,
        wireframe: false,
        color: 0x00bbf1,
        metalness: 0.1,
        roughness: 0.2,
        transmission: 0.9,
        transparent: true,
        thickness: 0.5,
        envMapIntensity: 1.5,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        side: THREE.DoubleSide
      })
      mouseMesh.value = new THREE.Mesh(geometry, material)
      mouseMesh.value.userData.update = () => {
        raycaster.setFromCamera(mousePos.value, camera.value)
        const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
        const intersection = new THREE.Vector3()

        raycaster.ray.intersectPlane(planeZ, intersection)

        mouseRigid.value.setTranslation(
          { x: intersection.x, y: intersection.y, z: intersection.z },
          true
        )
        mouseMesh.value.position.copy(intersection)
      }
      scene.value.add(mouseMesh.value)
    }

    const createMetaballs = () => {
      const textureLoader = new THREE.TextureLoader()
      const matcap = textureLoader.load(BlobCursor)

      const metaMat = new THREE.MeshPhysicalMaterial({
        matcap,
        vertexColors: true,
        flatShading: false,
        smoothShading: true,
        wireframe: false,
        color: 0x00bbf1,
        metalness: 0.1,
        roughness: 0.2,
        transmission: 0.9,
        transparent: true,
        thickness: 0.5,
        envMapIntensity: 1.5,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        side: THREE.DoubleSide
      })

      metaballs.value = new MarchingCubes(80, metaMat, true, true, 20000)
      metaballs.value.scale.setScalar(6)
      metaballs.value.isolation = 500
      metaballs.value.userData.update = () => {
        metaballs.value.reset()
        const elapsedTime = clock.getElapsedTime()

        bodies.value.forEach((b, index) => {
          const { x, y, z } = b.update()
          let strength = 0.5 + 0.1 * Math.sin(elapsedTime + index)

          if (isMelting.value) {
            const { rigid: metaballBody, meltDelay, creationTime } = b
            const position = metaballBody.translation()
            const timeSinceCreation = elapsedTime - creationTime
            if (timeSinceCreation >= meltDelay) {
              const meltFactor = Math.max(0, 1.5 - (position.y + 5) / 10)
              strength *= meltFactor
            } else {
              strength *= 1.0
            }
          }

          const subtract = 10
          metaballs.value.addBall(x, y, z, strength, subtract, b.color.getHex())
        })
        metaballs.value.update()
      }
      scene.value.add(metaballs.value)
    }

    const animate = () => {
      requestAnimationFrame(animate)
      world.value.step()
      mouseMesh.value.userData.update()
      metaballs.value.userData.update()
      metaballs.value.rotation.y += 0.005
      if (isMelting.value) {
        meltMetaballs()
      }
      renderer.value.render(scene.value, camera.value)
    }

    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      camera.value.aspect = w / h
      camera.value.updateProjectionMatrix()
      renderer.value.setSize(w, h)
    }

    const handleMouseMove = (evt) => {
      const rect = renderer.value.domElement.getBoundingClientRect()
      mousePos.value.x = ((evt.clientX - rect.left) / rect.width) * 2 - 1
      mousePos.value.y = -((evt.clientY - rect.top) / rect.height) * 2 + 1
    }

    const handleClick = () => {
      checkAndScatter()
    }

    const checkAndScatter = () => {
      const mousePosition = mouseRigid.value.translation()
      const threshold = 1.0

      bodies.value.forEach((bodyWrapper) => {
        const metaballBody = bodyWrapper.rigid

        if (metaballBody === mouseRigid.value) return

        const metaballPosition = metaballBody.translation()

        const dx = metaballPosition.x - mousePosition.x
        const dy = metaballPosition.y - mousePosition.y
        const dz = metaballPosition.z - mousePosition.z
        const distanceSquared = dx * dx + dy * dy + dz * dz

        if (distanceSquared < threshold * threshold) {
          const scatterDirection = {
            x: dx * 0.01 + (Math.random() - 0.5) * 0.8,
            y: dy * 0.01 + (Math.random() - 0.5) * 0.8,
            z: dz * 0.01 + (Math.random() - 0.5) * 0.8
          }

          metaballBody.applyImpulse(scatterDirection, true)
        }
      })
    }

    // getBody -----------------------------
    const getBody = ({ debug = false, RAPIER, world, isMelting }) => {
      const size = 0.2
      const range = 3
      const density = 0.5
      const meltSpeed = 0.39 + Math.random() * 0.6
      const maxMeltDelay = 1
      const meltDelay = Math.random() * maxMeltDelay
      const creationTime = clock.getElapsedTime()

      let x = Math.random() * range - range * 0.5
      let y = Math.random() * range - range * 0.5 + 3
      let z = Math.random() * range - range * 0.5

      let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(x, y, z).setLinearDamping(2)
      let rigid = world.createRigidBody(rigidBodyDesc)
      let colliderDesc = RAPIER.ColliderDesc.ball(size).setDensity(density)
      world.createCollider(colliderDesc, rigid)

      const hue = Math.random()
      const saturation = 0.8
      const lightness = 0.6
      const color = new THREE.Color().setHSL(hue, saturation, lightness)
      const initialPosition = new THREE.Vector3(x, y, z)

      let mesh
      if (debug === true) {
        const geometry = new THREE.IcosahedronGeometry(size, 3)
        geometry.computeVertexNormals()
        const material = new THREE.MeshBasicMaterial({
          color
        })
        mesh = new THREE.Mesh(geometry, material)
      }

      const update = () => {
        rigid.resetForces(true)
        let { x, y, z } = rigid.translation()
        let pos = new THREE.Vector3(x, y, z)

        if (!isMelting.value) {
          let dir = pos.clone().sub(sceneMiddle).normalize()
          rigid.addForce(dir.multiplyScalar(-0.5), true)
        }
        const elapsedTime = clock.getElapsedTime()
        const oscillation = new THREE.Vector3(
          0.2 * Math.sin(elapsedTime + initialPosition.x),
          0.1 * Math.cos(elapsedTime + initialPosition.y),
          0.3 * Math.sin(elapsedTime + initialPosition.z)
        )

        pos.add(oscillation)

        if (debug === true) {
          mesh.position.copy(pos)
        }
        pos.multiplyScalar(0.1).add(metaOffset)
        return pos
      }
      return { color, mesh, rigid, update, meltSpeed, meltDelay, creationTime }
    }

    onMounted(() => {
      initScene()
      window.addEventListener('resize', handleResize)
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('click', handleClick)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    })

    const buttonLabel = computed(() => {
      if (!isInitialized.value) {
        return ''
      }
      if (bodies.value.length === 0) {
        return 'Create'
      } else if (isMelting.value) {
        return 'Reset'
      } else {
        return 'Melt'
      }
    })

    return {
      container,
      startMeltAnimation,
      isMelting,
      buttonLabel
    }
  }
}
</script>

<style scoped>
.threejs-container {
  width: 99vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.blob-controls-container {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em;
  width: 20em;
  height: 3em;
  bottom: 4.5em;
  left: 4em;
}
.melt-button {
  position: relative;
  background: #e4e4e4;
  color: black;
  border-radius: 3em;
  border: none;
  font-size: 0.8rem;
  padding: 0.7em 1em;
}
</style>
