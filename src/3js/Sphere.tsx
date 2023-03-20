import React, { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import planet from "../assets/img/p.jpg";

function Sphere(props) {
  const imgMap = useTexture(planet);

  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 10)
  );
  const { scale } = useSpring({
    scale: hovered ? 1.5 : 1,
    config: config.wobbly,
  });

  const colors = [
    "#FD8A8A",
    "#FEBE8C",
    "#FFF6BD",
    "#C4DFAA",
    "#AEE2FF",
    "#8EA7E9",
    "#DBC6EB",
    "#FEDEFF",
    "#C8B6A6",
  ];
  const [color, setColor] = useState(
    () => `${colors[Math.floor(Math.random() * colors.length)]}`
  );
  const { color: animatedColor } = useSpring({
    color,
    config: config.molasses,
  });

  const handleClick = () => {
    setColor(`white`);
    click(!clicked);
    const newRandomNumber = Math.floor(Math.random() * 10);
    setRandomNumber(newRandomNumber);
    console.log(newRandomNumber);
  };

  return (
    <>
      <animated.mesh
        {...props}
        ref={ref}
        scale={scale}
        onClick={handleClick}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[1.3, 50, 25]}></sphereGeometry>
        <animated.meshStandardMaterial
          attach="material"
          map={imgMap}
          color={animatedColor}
        />
      </animated.mesh>
    </>
  );
}

export default Sphere;
