"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef, useState, useMemo } from "react"
import * as THREE from "three"

function RocketParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particleData = useMemo(() => {
    const particleCount = 400000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const velocities = new Float32Array(particleCount * 3)
    const cxs = new Float32Array(particleCount)
    const czs = new Float32Array(particleCount)
    const cRadii = new Float32Array(particleCount)
    const minYs = new Float32Array(particleCount)
    const maxYs = new Float32Array(particleCount)
    const omegas = new Float32Array(particleCount)

    let index = 0

    function addNozzleParticles(
      xCenter: number,
      zCenter: number,
      radius: number,
      height: number,
      density: number,
      baseColorHex: string
    ) {
      const baseColor = new THREE.Color(baseColorHex)
      for (let i = 0; i < density; i++) {
        if (index >= particleCount) return

        const theta = Math.random() * Math.PI * 2
        let r = Math.random() * radius
        const edgeBias = Math.random()
        if (edgeBias > 0.7) r = radius * (0.9 + Math.random() * 0.1)

        const y = (Math.random() - 0.5) * height

        positions[index * 3] = xCenter + r * Math.cos(theta)
        positions[index * 3 + 1] = y
        positions[index * 3 + 2] = zCenter + r * Math.sin(theta)

        const shade = 0.7 + Math.random() * 0.3
        const color = baseColor.clone().multiplyScalar(shade)
        if (r > radius * 0.8) color.lerp(new THREE.Color("#ffffff"), 0.6)
        if (Math.random() < 0.3) color.lerp(new THREE.Color("#ffffff"), 0.4)

        colors[index * 3] = color.r
        colors[index * 3 + 1] = color.g
        colors[index * 3 + 2] = color.b

        sizes[index] = 0.2 + Math.random() * 0.6

        velocities[index * 3] = (Math.random() - 0.5) * 0.25
        velocities[index * 3 + 1] = -(Math.random() * 0.5 + 0.25)
        velocities[index * 3 + 2] = (Math.random() - 0.5) * 0.25

        cxs[index] = xCenter
        czs[index] = zCenter
        cRadii[index] = radius
        minYs[index] = -height / 2
        maxYs[index] = height / 2
        omegas[index] = 0.25 + Math.random() * 0.5

        index++
      }
    }

    // Central 3 nozzles
    addNozzleParticles(0, 11.547, 10, 40, 6000, "#4d4d4d")
    addNozzleParticles(-10, -5.773, 10, 40, 6000, "#4d4d4d")
    addNozzleParticles(10, -5.773, 10, 40, 6000, "#4d4d4d")

    // Middle ring: 10 nozzles
    const middleRadius = 38.5
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2
      const x = middleRadius * Math.cos(angle)
      const z = middleRadius * Math.sin(angle)
      addNozzleParticles(x, z, 12, 45, 6000, "#3d3d3d")
    }

    // Outer ring: 20 nozzles
    const outerRadius = 77
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2
      const x = outerRadius * Math.cos(angle)
      const z = outerRadius * Math.sin(angle)
      addNozzleParticles(x, z, 12, 45, 6000, "#1a1a1a")
    }

    // Pipes: 6 large, tan-brown
    const pipeRadius = 110
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const x = pipeRadius * Math.cos(angle)
      const z = pipeRadius * Math.sin(angle)
      addNozzleParticles(x, z, 15, 120, 10000, "#c68c53")
    }

    // Blue wiring particles (changed to cyan for theme)
    for (let i = 0; i < 8000; i++) {
      if (index >= particleCount) break
      const theta = Math.random() * Math.PI * 2
      const r = 30 + Math.random() * 60
      positions[index * 3] = r * Math.cos(theta)
      positions[index * 3 + 1] = Math.random() * 5 - 2.5
      positions[index * 3 + 2] = r * Math.sin(theta)

      colors[index * 3] = 0.0
      colors[index * 3 + 1] = 0.9
      colors[index * 3 + 2] = 0.9

      sizes[index] = 0.3

      velocities[index * 3] = (Math.random() - 0.5) * 0.25
      velocities[index * 3 + 1] = -(Math.random() * 0.5 + 0.25)
      velocities[index * 3 + 2] = (Math.random() - 0.5) * 0.25

      cxs[index] = 0
      czs[index] = 0
      cRadii[index] = 90
      minYs[index] = -2.5
      maxYs[index] = 2.5
      omegas[index] = 0.1 + Math.random() * 0.25

      index++
    }

    return {
      positions: positions.slice(0, index * 3),
      colors: colors.slice(0, index * 3),
      sizes: sizes.slice(0, index),
      velocities: velocities.slice(0, index * 3),
      cxs: cxs.slice(0, index),
      czs: czs.slice(0, index),
      cRadii: cRadii.slice(0, index),
      minYs: minYs.slice(0, index),
      maxYs: maxYs.slice(0, index),
      omegas: omegas.slice(0, index),
      count: index,
    }
  }, [])

  useFrame((state, delta) => {
    if (particlesRef.current) {
      const pos = particlesRef.current.geometry.attributes.position
      const vel = particleData.velocities

      for (let i = 0; i < particleData.count; i++) {
        pos.array[i * 3] += vel[i * 3] * delta
        pos.array[i * 3 + 1] += vel[i * 3 + 1] * delta
        pos.array[i * 3 + 2] += vel[i * 3 + 2] * delta

        if (pos.array[i * 3 + 1] < particleData.minYs[i]) {
          pos.array[i * 3 + 1] = 2 * particleData.minYs[i] - pos.array[i * 3 + 1]
          vel[i * 3 + 1] = -vel[i * 3 + 1]
        }
        if (pos.array[i * 3 + 1] > particleData.maxYs[i]) {
          pos.array[i * 3 + 1] = 2 * particleData.maxYs[i] - pos.array[i * 3 + 1]
          vel[i * 3 + 1] = -vel[i * 3 + 1]
        }

        let px = pos.array[i * 3] - particleData.cxs[i]
        let pz = pos.array[i * 3 + 2] - particleData.czs[i]
        const dist = Math.sqrt(px * px + pz * pz)

        if (dist > particleData.cRadii[i] && dist > 0) {
          const nx = px / dist
          const nz = pz / dist
          const radialVel = vel[i * 3] * nx + vel[i * 3 + 2] * nz
          vel[i * 3] -= 2 * radialVel * nx
          vel[i * 3 + 2] -= 2 * radialVel * nz

          const overshoot = dist - particleData.cRadii[i]
          pos.array[i * 3] -= overshoot * nx
          pos.array[i * 3 + 2] -= overshoot * nz
        }

        px = pos.array[i * 3] - particleData.cxs[i]
        pz = pos.array[i * 3 + 2] - particleData.czs[i]
        const angle = Math.atan2(pz, px) + particleData.omegas[i] * delta
        const rad = Math.sqrt(px * px + pz * pz)
        pos.array[i * 3] = particleData.cxs[i] + rad * Math.cos(angle)
        pos.array[i * 3 + 2] = particleData.czs[i] + rad * Math.sin(angle)
      }
      pos.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particleData.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[particleData.colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[particleData.sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  )
}

function StarField() {
  const starsRef = useRef<THREE.Points>(null)
  const [starData] = useState(() => {
    const starCount = 10000
    const positions = new Float32Array(starCount * 3)
    const colors = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000

      const color = new THREE.Color(0xffffff)
      if (Math.random() < 0.1) color.set(0x00ffff) // Some cyan stars for theme

      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = 0.5 + Math.random() * 1
    }

    return { positions, colors, sizes, count: starCount }
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[starData.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[starData.colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[starData.sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial size={1} vertexColors blending={THREE.AdditiveBlending} transparent sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, -1, 1]} intensity={0.5} color="#ffe0c0" />
      <pointLight position={[0, -150, 0]} intensity={0.5} distance={500} />

      <group position={[0, 0, 0]}>
        <RocketParticles />
      </group>

      <StarField />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export function StarshipBackground() {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ backgroundColor: "#000000" }}>
      <Canvas camera={{ position: [0, -200, 0], fov: 75 }} gl={{ antialias: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}
