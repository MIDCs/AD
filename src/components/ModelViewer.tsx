"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function ArchitecturalShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        {/* Main tower */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[1.8, 4, 1.8]} />
          <MeshDistortMaterial
            color="#C75D3A"
            metalness={0.7}
            roughness={0.25}
            distort={0.08}
            speed={1.5}
          />
        </mesh>

        {/* Cantilevered section */}
        <mesh position={[1.4, 1, 0]} castShadow>
          <boxGeometry args={[1.8, 1, 2.2]} />
          <meshStandardMaterial
            color="#F2EDE8"
            metalness={0.2}
            roughness={0.7}
          />
        </mesh>

        {/* Glass facade */}
        <mesh position={[0, 0.5, 0.95]} castShadow>
          <boxGeometry args={[1.6, 3.5, 0.04]} />
          <meshPhysicalMaterial
            color="#88bbcc"
            metalness={0.1}
            roughness={0}
            transmission={0.9}
            thickness={0.5}
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Green element (nature) */}
        <mesh position={[-1.6, -0.8, 0.5]} castShadow>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#8A9B78"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        {/* Base platform */}
        <mesh position={[0, -2, 0]} receiveShadow>
          <cylinderGeometry args={[3.5, 4, 0.25, 64]} />
          <meshStandardMaterial
            color="#1a1714"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>

        {/* Vertical accent */}
        <mesh position={[-0.5, 3.2, -0.5]}>
          <boxGeometry args={[0.08, 1.8, 0.08]} />
          <meshStandardMaterial color="#C75D3A" metalness={0.9} roughness={0.1} emissive="#C75D3A" emissiveIntensity={0.3} />
        </mesh>

        {/* Horizontal planes */}
        {[0, 1.2, 2.4].map((y, i) => (
          <mesh key={i} position={[-2, -1 + y, 0]}>
            <boxGeometry args={[0.6, 0.04, 2.4]} />
            <meshStandardMaterial
              color="#F2EDE8"
              metalness={0.2}
              roughness={0.8}
              transparent
              opacity={0.5}
            />
          </mesh>
        ))}

        {/* Small landscape element */}
        <mesh position={[2, -1.7, -1]}>
          <boxGeometry args={[0.8, 0.3, 0.8]} />
          <meshStandardMaterial color="#8A9B78" metalness={0.1} roughness={0.9} />
        </mesh>
      </Float>

      {/* Floating particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </group>
  );
}

function FloatingParticle({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const speed = 0.2 + Math.random() * 0.4;
  const radius = 4 + Math.random() * 3;
  const offset = (index / 25) * Math.PI * 2;

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + offset;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 0.5) * 2;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshStandardMaterial
        color={index % 3 === 0 ? "#8A9B78" : "#C75D3A"}
        emissive={index % 3 === 0 ? "#8A9B78" : "#C75D3A"}
        emissiveIntensity={2}
      />
    </mesh>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-muted/50 text-xs tracking-[0.3em] uppercase font-display">Ładowanie 3D...</p>
      </div>
    </div>
  );
}

interface ModelViewerProps {
  className?: string;
  enableZoom?: boolean;
  autoRotate?: boolean;
}

export default function ModelViewer({ className = "", enableZoom = false, autoRotate = true }: ModelViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [7, 3, 7], fov: 40 }}
          shadows
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.25} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight position={[-5, 5, -5]} intensity={0.4} color="#C75D3A" />
          <pointLight position={[5, 3, 5]} intensity={0.2} color="#8A9B78" />
          <spotLight position={[0, 10, 0]} intensity={0.6} angle={0.3} penumbra={1} />

          <ArchitecturalShape />

          <OrbitControls
            enableZoom={enableZoom}
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={0.4}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 4}
          />

          <Environment preset="city" />
          <fog attach="fog" args={["#0C0A08", 15, 30]} />
        </Canvas>
      </Suspense>
    </div>
  );
}
