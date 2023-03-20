import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import Sphere1 from "./Sphere";

function repeatSphere() {
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(
      <Sphere1
        key={i}
        position={[
          Math.random() * 50 - 25,
          Math.random() * 50 - 25,
          Math.random() * 50 - 25,
        ]}
      />
    );
  }
  return arr;
}

function Layout() {
  return (
    <>
      <div className="universe">
        <Canvas camera={{ position: [0, 10, 10], fov: 80 }}>
          <PerspectiveCamera makeDefault position={[5, -20, 0]} />
          <OrbitControls autoRotate={false} />
          <ambientLight intensity={1} />
          <pointLight intensity={1} position={[10, 15, 10]} />
          <Stars />
          <Sphere1 position={[0, 0, 0]} />
          {repeatSphere()}
        </Canvas>
      </div>
    </>
  );
}

export default Layout;
