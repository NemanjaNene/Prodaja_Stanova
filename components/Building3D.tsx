'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Box, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Floor3DProps {
  position: [number, number, number];
  floorNumber: number;
  apartments: number;
  onClick: () => void;
  isHovered: boolean;
}

function Floor3D({ position, floorNumber, apartments, onClick, isHovered }: Floor3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current && isHovered) {
      meshRef.current.scale.setScalar(1.05);
    } else if (meshRef.current) {
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[8, 0.4, 6]}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        <meshStandardMaterial
          color={isHovered ? '#f59e0b' : '#0ea5e9'}
          emissive={isHovered ? '#f59e0b' : '#0284c7'}
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.2}
        />
      </Box>
      <Text
        position={[0, 0, 3.1]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {floorNumber}. Sprat
      </Text>
      <Text
        position={[0, -0.3, 3.1]}
        fontSize={0.25}
        color="#fbbf24"
        anchorX="center"
        anchorY="middle"
      >
        {apartments} stanova
      </Text>
    </group>
  );
}

export default function Building3D() {
  const [hoveredFloor, setHoveredFloor] = useState<number | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<number | null>(null);

  const floors = [
    { number: 8, apartments: 6 },
    { number: 7, apartments: 6 },
    { number: 6, apartments: 6 },
    { number: 5, apartments: 7 },
    { number: 4, apartments: 7 },
    { number: 3, apartments: 7 },
    { number: 2, apartments: 7 },
    { number: 1, apartments: 4 },
  ];

  return (
    <div className="relative w-full h-[700px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[12, 8, 12]} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={8}
          maxDistance={25}
          maxPolarAngle={Math.PI / 2}
        />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <spotLight position={[0, 15, 0]} angle={0.3} intensity={0.8} />

        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Building Floors */}
        {floors.map((floor, index) => (
          <Floor3D
            key={floor.number}
            position={[0, index * 0.8, 0]}
            floorNumber={floor.number}
            apartments={floor.apartments}
            onClick={() => setSelectedFloor(floor.number)}
            isHovered={hoveredFloor === floor.number}
          />
        ))}
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white p-6 rounded-xl max-w-sm">
        <h3 className="text-2xl font-bold mb-2">Interaktivni 3D Prikaz</h3>
        <p className="text-sm text-gray-300 mb-4">
          Kliknite na sprat da vidite dostupne stanove
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Dostupni spratovi</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gold-500 rounded"></div>
            <span>Selektovani</span>
          </div>
        </div>
      </div>

      {selectedFloor && (
        <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-2">{selectedFloor}. Sprat</h4>
          <p className="text-gray-300 mb-4">
            {floors.find(f => f.number === selectedFloor)?.apartments} dostupnih stanova
          </p>
          <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-full font-semibold transition">
            Pogledaj Stanove
          </button>
        </div>
      )}

      <div className="absolute bottom-6 left-6 text-white text-sm bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg">
        💡 Koristite miš za rotaciju i zoom
      </div>
    </div>
  );
}

