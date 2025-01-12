import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import Home from "./src/screens/Home";
import Donate from "./src/screens/Donate";
import DonateConfirm from "./src/screens/DonateConfirm";

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="bağış yap" component={Donate} />
      <Stack.Screen name="bağış onayı" component={DonateConfirm} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
