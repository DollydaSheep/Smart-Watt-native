import React, { useRef } from "react";
import { View } from "react-native";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function RotatingSphere() {

  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0025;
      meshRef.current.rotation.x += 0.0005;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshBasicMaterial color="hotpink" wireframe />
    </mesh>
  );
}

export default function Sphere3D() {
  return (
    <View style={{ flex: 1, width: '100%', height: '100%', }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <RotatingSphere />
        <OrbitControls enableRotate />
      </Canvas>
    </View>
  );
}
