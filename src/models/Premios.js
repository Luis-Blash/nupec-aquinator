import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "expo-three";

export const Premios = ({ textures = { map: "" } }) => {
  const mesh = useRef();
  let mapsDiffuse = require("../../assets/premios/textures/TREATS_DIGESTIVE_AL.png");
  if (textures.map !== "") {
    mapsDiffuse = textures.map;
  }
  const [diffuse] = useLoader(TextureLoader, [mapsDiffuse]);
  const material = useLoader(
    MTLLoader,
    require("../../assets/premios/Treats.mtl")
  );
  const obj = useLoader(
    OBJLoader,
    require("../../assets/premios/Treats.obj"),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );
  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = diffuse;
        child.castShadow = false;
        child.receiveShadow = false;
        if(textures.map === ""){
          child.visible = false
        } else {
          child.visible = true
        }
      }
    });
  }, [obj]);

  useFrame((state, delta) => {});

  return (
    <group>
      <primitive
        castShadow
        ref={mesh}
        rotation={[0.5, 0, 0]}
        position={[0, -0.2, 2]}
        object={obj}
        scale={7}
      />
    </group>
  );
};
