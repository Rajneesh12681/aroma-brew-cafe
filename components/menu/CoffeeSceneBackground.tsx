'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type CoffeeSceneBackgroundProps = {
  reducedMotion?: boolean
}

const beanPositions = [
  [-4.5, 2.4, -2.2],
  [-3.2, -1.7, -1.2],
  [-1.8, 3.1, -3.1],
  [1.8, 2.5, -2.4],
  [3.4, -1.1, -1.4],
  [4.7, 1.4, -2.8],
  [0.1, -2.4, -1.7],
] as const

function createBean() {
  const bean = new THREE.Group()
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 20, 14),
    new THREE.MeshStandardMaterial({
      color: '#5a2e18',
      roughness: 0.72,
      metalness: 0.05,
    }),
  )
  body.scale.set(0.72, 1, 0.34)

  const crease = new THREE.Mesh(
    new THREE.BoxGeometry(0.035, 0.52, 0.035),
    new THREE.MeshStandardMaterial({
      color: '#2a130a',
      roughness: 0.9,
    }),
  )
  crease.position.z = 0.1

  bean.add(body, crease)
  return bean
}

function createSteamRibbon(
  x: number,
  height: number,
  opacity: number,
  color = '#f5e6d3',
) {
  const points = Array.from({ length: 8 }, (_, index) => {
    const progress = index / 7
    return new THREE.Vector3(
      x + Math.sin(progress * Math.PI * 2.2) * 0.16,
      -0.25 + progress * height,
      -0.1 + Math.cos(progress * Math.PI * 1.6) * 0.08,
    )
  })
  const curve = new THREE.CatmullRomCurve3(points)
  const geometry = new THREE.TubeGeometry(curve, 40, 0.018, 8, false)
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
  })

  return new THREE.Mesh(geometry, material)
}

export function CoffeeSceneBackground({
  reducedMotion = false,
}: CoffeeSceneBackgroundProps) {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const mount = mountRef.current

    if (!mount) {
      return
    }

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    const clock = new THREE.Clock()
    const renderScale = Math.min(window.devicePixelRatio, 1.6)
    let frameId = 0
    let width = 1
    let height = 1

    renderer.setPixelRatio(renderScale)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    camera.position.set(0, 0.45, 8.8)
    camera.lookAt(0, 0.2, 0)

    const root = new THREE.Group()
    scene.add(root)

    const ambient = new THREE.AmbientLight('#d9b382', 0.75)
    const keyLight = new THREE.DirectionalLight('#fff3d5', 2.4)
    keyLight.position.set(-3, 4, 5)
    const rimLight = new THREE.PointLight('#d58a38', 8, 11)
    rimLight.position.set(3.2, 1.8, 2.2)
    scene.add(ambient, keyLight, rimLight)

    const saucer = new THREE.Mesh(
      new THREE.CylinderGeometry(2.55, 2.8, 0.18, 96),
      new THREE.MeshStandardMaterial({
        color: '#ead5b8',
        roughness: 0.5,
        metalness: 0.02,
      }),
    )
    saucer.position.y = -1.65
    saucer.scale.z = 0.56

    const cup = new THREE.Mesh(
      new THREE.CylinderGeometry(1.28, 1.02, 1.8, 96, 1, true),
      new THREE.MeshStandardMaterial({
        color: '#fff7ea',
        roughness: 0.42,
        metalness: 0.03,
        side: THREE.DoubleSide,
      }),
    )
    cup.position.y = -0.72

    const coffee = new THREE.Mesh(
      new THREE.CylinderGeometry(1.11, 1.11, 0.055, 96),
      new THREE.MeshStandardMaterial({
        color: '#6b3217',
        roughness: 0.25,
        metalness: 0.08,
      }),
    )
    coffee.position.y = 0.21

    const crema = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.018, 8, 88),
      new THREE.MeshBasicMaterial({
        color: '#d58a38',
        transparent: true,
        opacity: 0.65,
      }),
    )
    crema.position.y = 0.255
    crema.rotation.x = Math.PI / 2
    crema.scale.set(1.28, 0.68, 1)

    const handle = new THREE.Mesh(
      new THREE.TorusGeometry(0.62, 0.09, 16, 48, Math.PI * 1.35),
      new THREE.MeshStandardMaterial({
        color: '#efdcc1',
        roughness: 0.5,
      }),
    )
    handle.position.set(1.18, -0.55, 0)
    handle.rotation.set(Math.PI / 2, 0, Math.PI / 2)
    handle.scale.set(0.74, 1, 1)

    const steamGroup = new THREE.Group()
    steamGroup.add(
      createSteamRibbon(-0.38, 2.05, 0.28),
      createSteamRibbon(0.05, 2.42, 0.34, '#fff5df'),
      createSteamRibbon(0.43, 1.92, 0.24),
    )
    steamGroup.position.y = 0.42

    root.add(saucer, cup, coffee, crema, handle, steamGroup)

    const beanGroup = new THREE.Group()
    const beans = beanPositions.map(([x, y, z], index) => {
      const bean = createBean()
      bean.position.set(x, y, z)
      bean.rotation.set(index * 0.7, index * 1.1, index * 0.43)
      bean.userData = {
        baseY: y,
        speed: 0.35 + index * 0.06,
        offset: index * 0.9,
      }
      beanGroup.add(bean)
      return bean
    })
    scene.add(beanGroup)

    const resize = () => {
      const rect = mount.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.position.z = width < 768 ? 10.4 : 8.8
      root.scale.setScalar(width < 768 ? 0.78 : 1)
      root.position.y = width < 768 ? -0.2 : -0.05
      camera.updateProjectionMatrix()
    }

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()
      const motion = reducedMotion ? 0.18 : 1

      root.rotation.y = Math.sin(elapsed * 0.28 * motion) * 0.14
      root.rotation.x = Math.sin(elapsed * 0.2 * motion) * 0.035
      coffee.rotation.y = elapsed * 0.18 * motion
      crema.rotation.z = elapsed * 0.28 * motion
      steamGroup.position.y = 0.42 + Math.sin(elapsed * 0.9 * motion) * 0.08
      steamGroup.children.forEach((steam, index) => {
        steam.position.y = Math.sin(elapsed * (0.55 + index * 0.08) + index) * 0.12
        steam.position.x = Math.sin(elapsed * 0.42 + index) * 0.08
      })

      beans.forEach((bean) => {
        const { baseY, speed, offset } = bean.userData as {
          baseY: number
          speed: number
          offset: number
        }
        bean.position.y = baseY + Math.sin(elapsed * speed * motion + offset) * 0.28
        bean.rotation.x += 0.004 * motion
        bean.rotation.y += 0.006 * motion
      })

      renderer.render(scene, camera)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)
    resize()
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      mount.removeChild(renderer.domElement)
      renderer.dispose()

      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) {
          return
        }

        object.geometry.dispose()
        const material = object.material

        if (Array.isArray(material)) {
          material.forEach((item) => item.dispose())
          return
        }

        material.dispose()
      })
    }
  }, [reducedMotion])

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-85 [mask-image:linear-gradient(to_bottom,transparent_0%,black_13%,black_82%,transparent_100%)]"
      aria-hidden="true"
    />
  )
}
