import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenHome } from "../screen/ScreenHome";
import { ScreenRequest } from "../screen/ScreenRequest";
import { ScreenSelectPets } from "../screen/ScreenSelectPets";
import { pathRoute } from ".";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={pathRoute.screenHome}
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name={pathRoute.screenHome} component={ScreenHome} />
      <Stack.Screen
        name={pathRoute.screenSelectPets}
        component={ScreenSelectPets}
      />
      <Stack.Screen name={pathRoute.screenRequest} component={ScreenRequest} />
    </Stack.Navigator>
  );
};
