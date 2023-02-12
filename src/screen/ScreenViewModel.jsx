import { Dimensions, View } from "react-native";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Costal } from "../models/Costal";
import { Lata } from "../models/Lata";
import { ButonPrimary } from "../components/Buttons/ButonPrimary";
import { typeModal } from "../types/productsDog";
import { Premios } from "../models/Premios";

const { width, height } = Dimensions.get("window");

export const ScreenViewModel = ({ route }) => {
  const { params } = route;
  const [zoom, setZoom] = useState(false);
  return (
    <View style={{ height, width }}>
      <Canvas>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Costal textures={{ map: params.mapCostal }} />
          <Lata textures={{ map: params.mapLata }} />
          <Premios textures={{ map: params.mapPremios }} />
        </Suspense>
      </Canvas>
      <View
        style={{
          position: "absolute",
          bottom: 100,
          left: 100,
        }}
      >
        <ButonPrimary
          action={() => {
            setZoom(!zoom);
          }}
        >
          Zoom
        </ButonPrimary>
      </View>
    </View>
  );
};
