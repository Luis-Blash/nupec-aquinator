import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "expo-three";

export const Pet2 = () => {
  const mesh = useRef();
  const [diffuse] = useLoader(TextureLoader, [
    require("../../assets/ESPECIALIDAD_FELINO_HAIRBALLCONTROL/TXT_ESPECIALIDAD_CANINO_RENALCARE.jpg")
  ]);
  const material = useLoader(MTLLoader, require("../../assets/ESPECIALIDAD_FELINO_HAIRBALLCONTROL/PRUEBA_ESPECIALIDAD_FELINO_HAIRBALLCONTROL.mtl"));
  const obj = useLoader(
    OBJLoader,
    require("../../assets/ESPECIALIDAD_FELINO_HAIRBALLCONTROL/PRUEBA_ESPECIALIDAD_FELINO_HAIRBALLCONTROL.obj"),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );
  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = diffuse;
        // child.material.bumpMap = bump;
        // child.material.bumpScale = 1;
        // child.material.specularMap = specular;
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [obj]);
  return (
    <group>
      {/* <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
      >
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} scale={2} />
        <shadowMaterial attach="material" opacity={0.5} color="black" />
      </mesh> */}

      <primitive
        castShadow
        ref={mesh}
        rotation={[0, 0.6, 0]}
        position={[0,0,0]}
        object={obj}
        scale={5}
      />
    </group>
  );
};
