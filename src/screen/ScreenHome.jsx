import { Button, Dimensions, Text, View } from 'react-native'
import { pathRoute } from '../navigator';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Pet2 } from '../models/Pet2';

const { width, height } = Dimensions.get("window");

export const ScreenHome = ({ navigation }) => {
  const goNavigate = () => {
    navigation.navigate(pathRoute.screenSelectPets);
  };
 
  return (
    <View style={{ height: height, width }}>
      <Canvas>
        <ambientLight intensity={0.7} />
        <Suspense fallback={null}>
          <Pet2 />
        </Suspense>
      </Canvas>
    </View>
    // <View>
    //   <Text>ScreenHome</Text>
    //   <Button title="Pets" onPress={goNavigate} />
    // </View>
  );
};
