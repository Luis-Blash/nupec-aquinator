// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { View, Dimensions } from "react-native";
// import { Pet2 } from "./src/models/Pet2";

// const { width, height } = Dimensions.get("window");
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from "./src/navigator/StackNavigator";

export default function App() {
  return (
    // <View style={{ height: height, width }}>
    //   <Canvas>
    //     <ambientLight intensity={0.7} />
    //     <Suspense fallback={null}>
    //       <Pet2 />
    //     </Suspense>
    //   </Canvas>
    // </View>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
